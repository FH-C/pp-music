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
    <PlayingSongListVue></PlayingSongListVue>
  </div>
</template>

<script setup lang="ts">
import { getPlayingLocalStorage } from '../utils/localStorage'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { getSongDetail, getSongURL } from '../api/play'
import { useSongStore } from '../store/song'
import PlayingSongListVue from './PlayingSongList.vue'
import CircleVue from './Circle.vue'

const router = useRouter()
const songStore = useSongStore()

onMounted(() => {
  listenEnd()
})

watch(() => songStore.playingId, async (songId) => {
  console.log(songId)
  const res = await getSongDetail({
    ids: songId.toString(),
  })
  songStore.playingSongDetail = res.value.songs[0]
  console.log(songStore.playingSongDetail)
  if (songStore.playingSongList.length === 0) {
    songStore.playingSongList = res.value.songs
  }
  setPlayingLocalStorage()
  // play(true)
})

watch(() => songStore.playStatus, async (newValue) =>{
  if (newValue) {
    const res = await getSongDetail({
      ids: songStore.playingId.toString(),
    })
    songStore.playingSongDetail = res.value.songs[0]
    if (songStore.playingSongList.length === 0) {
      songStore.playingSongList = res.value.songs
    }
    songStore.playerRef.play()
  } else {
    songStore.playerRef.pause()
  }
})

watch(() => songStore.playingSongList, async () => {
  console.log('songStore.playingSongList', songStore.playingSongList)
  songStore.misicPicList = songStore.playingSongList.map((item: any) => {
    console.log('item', item)
    if (item && item.al) {
      return item.al.picUrl
    } else if (item && item.album) {
      return item.album.picUrl
    }
  })
  await getSongUrlList()
})

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
  const res = await getSongURL({
    id: songStore.playingSongList.map((song: any) => song.id).join(','),
  })
  songStore.musicUrlList = res.value.data.map((song: any) => song.url)
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
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
    case 1:
      // 顺序播放
      if (songStore.playingSongList.length <= songStore.playingIndex + 1) {
        songStore.playingIndex = 0
        songStore.playStatus = false
      } else {
        songStore.playingIndex ++
        songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
        // songStore.playerRef.play()
        setTimeout(() => {
          songStore.playStatus = false
        }, 200)
        setTimeout(() => {
          songStore.playStatus = true
        }, 200)
      }
      break
    case 2:
      // 随机播放
      const randomInt = Math.floor(Math.random() * (songStore.playingSongList.length + 1))
      songStore.playingIndex = randomInt
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      // songStore.playerRef.play()
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
    case 3:
      // 单曲循环
      // songStore.playerRef.play()
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
  }
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
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
    case 1:
      // 顺序播放
      if (songStore.playingIndex - 1 < 0) {
        songStore.playingIndex = songStore.playingSongList.length - 1
      } else {
        songStore.playingIndex --
      }
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
    case 2:
      // 随机播放
      const randomInt = Math.floor(Math.random() * (songStore.playingSongList.length + 1))
      songStore.playingIndex = randomInt
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      // songStore.playerRef.play()
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
    case 3:
      // 单曲循环
      // songStore.playerRef.play()
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
      break
  }
}

const listenEnd = function () {
  songStore.playerRef.addEventListener('ended', getNextSong)
}

const play = function (force: boolean) {
  if (force) {
    songStore.playerRef.play()
    songStore.playStatus = true
  } else {
    if (songStore.playStatus) {
      songStore.playerRef.pause()
    } else {
      songStore.playerRef.play()
    }
    songStore.playStatus = !songStore.playStatus
  }
  songStore.playerRef.muted = false
}

defineExpose({
  getNextSong,
  getPrevSong,
  play,
})

</script>

<style scoped lang="scss">
@import url('../styles/common.scss');
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
