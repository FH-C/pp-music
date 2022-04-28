<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSongStore } from 'store/song'
import { getPlayingLocalStorage } from './utils/localStorage'

const songStore = useSongStore()
const playerRef = ref(null)
onMounted(() => {
  songStore.playerRef = playerRef.value
  songStore.playerRef.addEventListener('ended', getNextSong)
  songStore.playerRef.addEventListener('pause', () => {
    songStore.playStatus = false
  })
  songStore.playerRef.addEventListener('play', () => {
    songStore.playStatus = true
  })
})
const getNextSong = function () {
  switch (songStore.playingType) {
    case 0:
      // 列表循环
      if (songStore.playingSongList.length <= songStore.playingIndex + 1) {
        songStore.playingIndex = 0
      } else {
        songStore.playingIndex += 1
      }
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      break
    case 1:
      // 随机播放
      songStore.playingIndex = Math.floor(Math.random() * (songStore.playingSongList.length + 1))
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      break
    case 2:
      // 单曲循环
      break
    default:
      break
  }
  setTimeout(() => songStore.playerRef.play(), 50)
}
const timeUpdate = function (e: Event | any) {
  songStore.currentPlayTime = e.target.currentTime
}
</script>

<template>
  <router-view></router-view>
  <div style="display: none;">
    <audio
      ref="playerRef"
      :src="songStore.musicUrlList[songStore.playingIndex]"
      @timeupdate="timeUpdate"
    >
    </audio>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
