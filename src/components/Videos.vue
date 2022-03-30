<template>
  <van-cell-group>
    <van-cell
      v-for="item in props.videos"
      :key="item.id"
    >
      <div class="flex-row">
        <div>
          <van-image
            :src="item.resource.mlogBaseData.coverUrl"
            radius="10"
          />
        </div>
        <div class="flex-column">
          <div>{{ item.resource.mlogBaseData.text }}</div>
          <div>{{ getDate(item.resource.mlogBaseData.pubTime) }}</div>
          <div>{{ playCount(item.resource.mlogBaseData.mlogExtVO.playCount) }}</div>
        </div>
      </div>
    </van-cell>
  </van-cell-group>
</template>

<script setup lang="ts">
import { dateConvert, numberConvert } from '@/utils/convert'
import { computed } from 'vue'
const props = defineProps({
  videos: {
    type: Array as any,
    default: () => {
      return []
    },
  },
})
const playCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
const getDate = computed(() => {
  return function(timestamp: number) {
    return dateConvert(timestamp, 'yyyy-MM-dd')
  }
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
</style>
