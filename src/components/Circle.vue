<template>
  <div class="progress-circle">
    <svg
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="progress-background"
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
      />
      <circle
        class="progress-bar"
        r="50"
        cx="50"
        cy="50"
        fill="transparent"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
      />
    </svg>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useSongStore } from 'store/song'
const props = defineProps({
  radius: {
    type: String,
    default: '30px',
  },
})
const songStore = useSongStore()
const dashArray = Math.PI * 100
const dashOffset = computed(() => {
  return (1 - songStore.currentPlayTime / (songStore.playerRef.duration || 1)) * dashArray
})
</script>

<style scoped lang="scss">
.progress-circle {
  position: absolute;
  right: 70px;
  top: -5px;
  width: 60px;
  height: 60px;
  svg {
    circle {
      stroke-width: 10px;
      transform-origin: center;
    }
  }
  .progress-background {
    transform: scale(0.9);
    stroke: #e9e9e9;
  }
  .progress-bar {
    transform: scale(0.9) rotate(-90deg);
    stroke: #7a7a7a;
  }
}
</style>
