<template>
  <div
    v-show="songStore.showPlayer"
  >
    <div
      v-if="songStore.playingSongDetail.al"
      class="flex-row bar align-items-center"
    >
      <div class="image">
        <van-image
          :src="songStore.playingSongDetail.al.picUrl"
          round
          class="mini-icon"
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
          @click="play(false)"
        >
          <van-icon
            v-if="songStore.playStatus"
            name="pause-circle-o"
            class="play-icon"
          />
          <van-icon
            v-else
            name="play-circle-o"
            class="play-icon"
          />
        </div>
        <div>
          <van-icon
            name="bars"
            class="play-icon"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'
import { onMounted, ref, watch } from 'vue'
import { getSongDetail, getSongURL } from '../api/play'
import { useSongStore } from '../store/song'

const songStore = useSongStore()

onMounted(() => {
  listenEnd()
})

watch(() => songStore.playingId, async (songId) => {
  await getSongUrl()
  const res = await getSongDetail({
    ids: songId.toString(),
  })
  songStore.playingSongDetail = res.value.songs[0]
  play(true)
})

const getSongUrl = async function () {
  const res = await getSongURL({
    id: songStore.playingId,
  })
  songStore.musicUrl = res.value.data[0].url
}

const listenEnd = function () {
  console.log(songStore.playerRef)
  songStore.playerRef.addEventListener('ended', function () {  
    songStore.playingIndex ++
    songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
  }, false)
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

</style>
