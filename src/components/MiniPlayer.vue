<template>
  <div
    v-show="songStore.showPlayer"
  >
    <div
      v-if="songStore.playingSongDetail.al"
      class="flex-row bar align-items-center"
      @click="router.push({ path: '/player', query: { id: songStore.playingSongDetail.id } })"
    >
      <div class="image">
        <van-image
          :src="songStore.playingSongDetail.al.picUrl"
          round
          :class="['mini-icon', {'rotate': songStore.playStatus}]"
          style="margin-left: 4vw;"
        />
      </div>
      <div
        class="text-line-one"
        style="padding-left: 2vw;width: 60vw;"
      >
        <span
          class="medium-font"
          style="font-weight: 650;"
        >
          {{ songStore.playingSongDetail.name }}
        </span>
        <span
          v-if="songStore.playingSongDetail.alia.length > 0"
          class="medium-font"
        >({{ songStore.playingSongDetail.alia[0] }})</span>
        <span
          v-if="songStore.playingSongDetail.ar.length > 0"
          class="small-font"
        >
          -<span
            v-for="(ar, index) in songStore.playingSongDetail.ar"
            :key="ar.id"
          >{{ ar.name }}<span v-if="index + 1 !== songStore.playingSongDetail.ar.length">/</span></span>
        </span>
      </div>
      <div class="icon flex-row">
        <div
          @click.stop="play(false)"
        >
          <CircleVue>
            <van-icon
              v-if="songStore.playStatus"
              name="pause"
              class="play-icon icon2"
            />
            <van-icon
              v-else
              name="play"
              class="play-icon icon2"
            />
          </CircleVue>
        </div>
        <div @click.stop="songStore.showPopup = true">
          <van-icon
            name="bars"
            class="play-icon"
          />
        </div>
      </div>
    </div>
    <PlayingSongListVue @play="playByIndex"></PlayingSongListVue>
  </div>
</template>

<script setup lang="ts">
import { getPlayingLocalStorage } from '@/utils/localStorage'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getSongDetail, getSongURL, getLyrics } from '@/api/play'
import { useSongStore } from 'store/song'
import PlayingSongListVue from './PlayingSongList.vue'
import CircleVue from './Circle.vue'
import { lyricsConvert } from '@/utils/convert'

const router = useRouter()
const songStore = useSongStore()

watch(() => songStore.playingId, async (songId) => {
  const res = await getSongDetail({
    ids: songId.toString(),
  })
  songStore.playingSongDetail = res.value.songs[0]
  if (songStore.playingSongList.length === 0) {
    songStore.playingSongList = res.value.songs
  }
  getLyricsById(songId)
  setPlayingLocalStorage()
  // play(true)
})

watch(() => songStore.playStatus, async (newValue) =>{
  if (newValue) {
    // const res = await getSongDetail({
    //   ids: songStore.playingId.toString(),
    // })
    // songStore.playingSongDetail = res.value.songs[0]
    // if (songStore.playingSongList.length === 0) {
    //   songStore.playingSongList = res.value.songs
    // }
    songStore.playerRef.play()
  } else {
    songStore.playerRef.pause()
  }
})

watch(() => songStore.playingIndex, async (newValue) =>{
})

watch(() => songStore.playingSongList, async () => {
  songStore.misicPicList = songStore.playingSongList.map((item: any) => {
    if (item && item.al) {
      return item.al.picUrl
    } else if (item && item.album) {
      return item.album.picUrl
    }
  })
  await getSongUrlList()
})

const getLyricsById = async function (songId: number) {
  const res = await getLyrics({
    id: songId.toString(),
  })
  songStore.lyrics = lyricsConvert(res.value.lrc?.lyric || '[99:99.999]暂时没有歌词')
}

const setPlayingLocalStorage = function () {
  const playing = {
    playingId: songStore.playingId,
    playingIndex: songStore.playingIndex,
    playingSongList: songStore.playingSongList,
    playingType: songStore.playingType,
  }
  localStorage.setItem('playing', JSON.stringify(playing))
}

const getSongUrlList = async function () {
  const ids = songStore.playingSongList.map((song: any) => song.id)
  const res = await getSongURL({
    id: ids.join(','),
  })
  songStore.musicUrlList = res.value.data.sort((a: any,b: any)=>{
    return ids.indexOf(a.id) - ids.indexOf(b.id)
  }).map((song: any) => song.url)
}

const getNextSong = function () {
  switch (songStore.playingType) {
    case 0:
      // 列表循环
      if (songStore.playingSongList.length <= songStore.playingIndex + 1) {
        songStore.playingIndex = 0
      } else {
        songStore.playingIndex ++
      }
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      console.log(songStore.playingIndex)
      console.log(songStore.playingSongList[songStore.playingIndex])
      break
    case 1:
      // 随机播放
      const randomInt = Math.floor(Math.random() * (songStore.playingSongList.length + 1))
      songStore.playingIndex = randomInt
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      break
    case 2:
      // 单曲循环
      break
  }
  setTimeout(() => songStore.playerRef.play(), 50)
}

const getPrevSong = function () {
  switch (songStore.playingType) {
    case 0:
      // 列表循环
      if (songStore.playingIndex - 1 < 0) {
        songStore.playingIndex = songStore.playingSongList.length - 1
      } else {
        songStore.playingIndex --
      }
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      break
    case 1:
      // 随机播放
      const randomInt = Math.floor(Math.random() * (songStore.playingSongList.length + 1))
      songStore.playingIndex = randomInt
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      // songStore.playerRef.play()
      break
    case 2:
      // 单曲循环
      // songStore.playerRef.play()
      break
  }
  setTimeout(() => songStore.playerRef.play(), 50)
}

const playByIndex = function (index: number) {
  songStore.playingIndex = index
  songStore.playingId = songStore.playingSongList[index].id
  setTimeout(() => {
    songStore.playStatus = false
  }, 200)
  setTimeout(() => {
    songStore.playStatus = true
  }, 200)
}

const play = function (force: boolean) {
  if (force) {
    songStore.playStatus = true
  } else {
    songStore.playStatus = !songStore.playStatus
  }
  songStore.playerRef.muted = false
}

defineExpose({
  getNextSong,
  getPrevSong,
  play,
  playByIndex,
})

</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.bar {
  background-color: #ffffff;
  width: 100vw;
}
.bar:hover {
  background-color: #f2f2f2;
}

.icon {
  position: fixed;
  right: 4vw;
  div:last-child {
    padding-left: 4vw;
  }
}

.image {
  position: relative;
  bottom: 6px;
}

.icon2 {
  font-size: 40px;
  // position: absolute;
  top: -58px;
}

</style>
