<template>
  <div class="flex-row align-items-center box justify-content-center">
    <span
      class="small-font text"
      style="color: #a0a2a3; padding-right: 2vw;"
    >{{ timeConvert(Math.ceil(props.currentTime)) }}</span>
    <van-progress
      inactive
      :percentage="currentTime / duration * 100"
      :show-pivot="false"
      class="progress-bar"
      color="rgba(108, 111, 111, 0.2)"
      track-color="rgba(108, 111, 111, 0.1)"
    />
    <span
      class="small-font text"
      style="color: #6d7173; padding-left: 2vw;"
    >{{ timeConvert(Math.ceil(props.duration)) }}</span>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { timeConvert } from '../../utils/convert'
const props = defineProps({
  currentTime: {
    type: Number,
    default: 0,
  },
  duration: {
    type: Number,
    default: 0,
  },
})

</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
.progress-bar {
  width: 70%;
}
.box {
  width: 100vw;
}

</style>