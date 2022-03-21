<template>
  <div class="flex-row align-items-center space-between">
    <PlayingTypeVue></PlayingTypeVue>
    <svg
      t="1647683608918"
      class="micro-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2814"
      @click="prev"
    ><path
      d="M803.584 134.592c-18.176-10.048-39.936-10.112-58.112 0L192 443.008l0-282.88c0-17.664-14.336-32-32-32S128 142.464 128 160.128l0 344.896C127.744 507.2 127.104 509.248 127.104 511.488S127.744 515.84 128 518.016l0 346.112c0 17.664 14.336 32 32 32s32-14.336 32-32L192 579.968l553.408 308.352C754.56 893.44 764.48 896 774.528 896s19.968-2.56 29.056-7.616c18.176-10.112 28.992-28.224 28.992-48.576L832.576 183.104C832.576 162.88 821.76 144.768 803.584 134.592zM768.192 829.248 198.016 511.488 771.328 192 768.192 829.248z"
      p-id="2815"
      fill="#cecfcf"
    ></path></svg>
    <van-icon
      v-if="!songStore.playStatus"
      name="play-circle-o"
      color="#ffffff"
      class="big-font-icon"
      @click="play"
    />
    <van-icon
      v-else
      name="pause-circle-o"
      color="#ffffff"
      class="big-font-icon"
      @click="play"
    />
    <svg
      t="1647683571188"
      class="micro-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="1953"
      @click="next"
    ><path
      d="M832 160.128c0-17.664-14.336-32-32-32S768 142.464 768 160.128l0 282.88L214.592 134.592c-18.176-10.112-39.936-10.048-58.112 0C138.24 144.768 127.424 162.88 127.424 183.168l0 656.64c0 20.224 10.816 38.464 29.056 48.576C165.568 893.44 175.488 896 185.472 896s19.968-2.56 29.056-7.616L768 579.968l0 284.096c0 17.664 14.336 32 32 32s32-14.336 32-32L832 160.128zM191.808 829.248 188.672 192l573.312 319.488L191.808 829.248z"
      p-id="1954"
      fill="#cecfcf"
    ></path></svg>
    <svg
      t="1647683744736"
      class="micro-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="10969"
      @click="showList"
    ><path
      d="M912.014222 192H327.964444a8.021333 8.021333 0 0 0-7.992888 7.992889V256c0 4.408889 3.612444 7.992889 7.992888 7.992889h584.021334a8.021333 8.021333 0 0 0 7.964444-7.992889V199.992889a8.021333 8.021333 0 0 0-7.964444-7.992889z m0 283.989333H327.964444a8.021333 8.021333 0 0 0-7.992888 8.021334v55.978666c0 4.408889 3.612444 8.021333 7.992888 8.021334h584.021334a8.021333 8.021333 0 0 0 7.964444-8.021334v-55.978666a8.021333 8.021333 0 0 0-7.964444-8.021334z m0 284.017778H327.964444a8.021333 8.021333 0 0 0-7.992888 7.992889v56.007111c0 4.380444 3.612444 7.992889 7.992888 7.992889h584.021334a8.021333 8.021333 0 0 0 7.964444-7.992889V768a8.021333 8.021333 0 0 0-7.964444-7.992889zM103.964444 228.010667a56.007111 56.007111 0 1 0 112.014223 0 56.007111 56.007111 0 0 0-112.014223 0z m0 283.989333a56.007111 56.007111 0 1 0 112.014223 0 56.007111 56.007111 0 0 0-112.014223 0z m0 283.989333a56.007111 56.007111 0 1 0 112.014223 0 56.007111 56.007111 0 0 0-112.014223 0z"
      p-id="10970"
      fill="#cecfcf"
    ></path></svg>
  </div>
</template>

<script setup lang="ts">
import PlayingTypeVue from '../PlayingType.vue'
import { useSongStore } from '../../store/song'
const emit = defineEmits(['next', 'prev', 'play', 'showList'])
const songStore = useSongStore()
const prev = function () {
  emit('prev')
}
const next = function () {
  emit('next')
}
const play = function () {
  emit('play')
}
const showList = function () {
  emit('showList')
}
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
</style>
