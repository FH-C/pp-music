<template>
  <div>
    <VideosVue
      :videos="props.videos"
      :loading="props.loading"
      :finished="props.finished"
      @load="load"
    ></VideosVue>
  </div>
</template>

<script setup lang="ts">
import VideosVue from '../Videos.vue'
const props = defineProps({
  videos: {
    type: Array as any,
    default: () => {
      return []
    }
  },
  loading: {
    type: Boolean,
    default: false
  },
  finished: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['load'])
const load = function () {
  emit('load')
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
</style>
