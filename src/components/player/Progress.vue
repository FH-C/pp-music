<template>
  <div class="flex-row align-items-center box justify-content-center">
    <span
      class="small-font text"
      style="color: #a0a2a3; padding-right: 2vw;"
    >{{ showCurrentTime ? timeConvert(Math.ceil(showCurrentTime)) : timeConvert(Math.ceil(props.currentTime)) }}</span>
    <!-- <van-progress
      inactive
      :percentage="currentTime / duration * 100"
      :show-pivot="false"
      class="progress-bar"
      color="rgba(108, 111, 111, 0.2)"
      track-color="rgba(108, 111, 111, 0.1)"
    /> -->
    <ProgressVue
      :percentage="currentTime / duration * 100"
      color="rgba(108, 111, 111, 0.2)"
      track-color="rgba(108, 111, 111, 0.1)"
      class="progress-bar"
      @update:percentage="updatePercentage"
      @update:percentage-delay="updatePercentageDelay"
    ></ProgressVue>
    <span
      class="small-font text"
      style="color: #6d7173; padding-left: 2vw;"
    >{{ timeConvert(Math.ceil(props.duration)) }}</span>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import ProgressVue from 'components/Progress.vue'
import { timeConvert } from '@/utils/convert'

const emit = defineEmits(['update:currentTime'])
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

const showCurrentTime = ref(0)

const updatePercentage = function (percentage: number) {
  emit('update:currentTime', percentage)
  showCurrentTime.value = 0
}

const updatePercentageDelay = function (percentage: number) {
  showCurrentTime.value = percentage / 100 * props.duration
}

</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.progress-bar {
  width: 70%;
}
.box {
  width: 100vw;
}

</style>
