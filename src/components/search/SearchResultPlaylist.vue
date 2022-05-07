<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="props.finished"
      finished-text="到底啦~"
      @load="onLoad"
    >
      <van-cell
        v-for="item in props.playlists"
        :key="item.id"
        center
        @click="toPlaylistDetail(item.id)"
      >
        <div class="flex-row flex-start">
          <div>
            <van-image
              class="small-image"
              radius="10"
              :src="item.coverImgUrl"
            />
          </div>
          <div class="flex-column text">
            <span class="medium-font text-line-one">
              <span v-if="getIndex(item.name) !== -1">{{ item.name.slice(0, getIndex(item.name)) }}</span>
              <span v-else>{{ item.name.slice(0) }}</span>
              <span
                v-if="getIndex(item.name) !== -1"
                class="font-blue"
              >
                {{ item.name.slice(getIndex(item.name), getIndex(item.name) + props.searchKeyword.length) }}
              </span>
              <span v-if="getIndex(item.name) !== -1">
                {{ item.name.slice(getIndex(item.name) + props.searchKeyword.length) }}
              </span>
            </span>
            <span class="small-font">
              {{ `${item.trackCount}首,by ${item.creator.nickname}，播放${playCount(item.playCount)}次` }}
            </span>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { numberConvert } from '@/utils/convert'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
const emit = defineEmits(['load'])
const router = useRouter()
const props = defineProps({
  playlists: {
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
  },
  searchKeyword: {
    type: String,
    default: ''
  }
})
const loading = ref(props.loading)
watch(() => props.loading, (val) => {
  loading.value = val
})
const onLoad = function () {
  emit('load')
}
const playCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
const getIndex = computed(() => {
  return function(name: string) {
    return name.indexOf(props.searchKeyword)
  }
})

const toPlaylistDetail = function (playlistId: number) {
  router.push({
    path: '/playlist',
    query: {
      id: playlistId
    }
  })
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.text {
  padding-left: 2vw;
}
</style>
