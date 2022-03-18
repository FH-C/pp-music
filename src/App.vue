<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useSongStore } from './store/song'
import { getPlayingLocalStorage } from './utils/localStorage'
const songStore = useSongStore()
const playerRef = ref(null)
onMounted(() => {
  songStore.playerRef = playerRef.value
})
const timeUpdate = function (e: Event | any) {
  songStore.currentPlayTime = e.target.currentTime
}
</script>

<template>
  <router-view></router-view>
  <div style="display: none;">
    <audio
      ref="playerRef"
      :src="songStore.musicUrl"
      @timeupdate="timeUpdate"
    >
    </audio>
  </div>
</template>

<style>
html, body{ 
  margin:0; height:100%;
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
