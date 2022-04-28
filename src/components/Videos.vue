<template>
  <van-cell-group>
    <van-list
      v-model:loading="loading"
      :finished="props.finished"
      finished-text="到底啦~"
      @load="load"
    >
      <van-cell
        v-for="item in props.videos"
        :key="item.id"
        @click="toVideo(item.id || item.vid, item)"
      >
        <div class="flex-row">
          <div>
            <van-image
              :src="item.resource?.mlogBaseData.coverUrl || item.coverUrl"
              radius="10"
              height="15vh"
              width="42vw"
            />
          </div>
          <div class="flex-column margin-row-4">
            <div class="midium-font text-line-two">{{ item.resource?.mlogBaseData.text || item.title }}</div>
            <div
              class="gray-font small-font"
            >
              {{ item.resource ? getDate(item.resource.mlogBaseData.pubTime) : item.creator[0].userName }}
            </div>
            <div class="gray-font small-font">
              {{ playCount(item.resource?.mlogExtVO.playCount || item.playTime) }}播放
            </div>
          </div>
        </div>
      </van-cell>
    </van-list>
  </van-cell-group>
</template>
<script setup lang="ts">
import { dateConvert, numberConvert } from '@/utils/convert'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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
const loading = ref(props.loading)
watch(() => props.loading, (val) => {
  loading.value = val
})
const load = function () {
  emit('load')
}
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
const toVideo = function (id: string, item: any) {
  let typeName = ''
  if (item.resource?.mlogBaseData.type === 3 || item.type === 0) {
    typeName = 'mv'
  } else if (item.resource?.mlogBaseData.type === 2) {
    typeName = 'mlog'
  } else if (item.type === 1) {
    typeName = 'video'
  }
  router.push({
    path: 'video',
    query: {
      id: id,
      type: typeName
    }
  })
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
</style>
