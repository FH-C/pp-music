<template>
  <div>
    <van-list
      v-model:loading="loading"
      :finished="props.finished"
      finished-text="到底啦~"
      @load="onLoad"
    >
      <van-cell
        v-for="item in albums"
        :key="item.id"
        center
        @click="toAlbumDetail(item.id)"
      >
        <div class="flex-row flex-start">
          <div>
            <van-image
              class="small-image"
              radius="10"
              :src="item.picUrl"
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
            <span
              v-if="item.artists.length > 0"
              class="small-font"
            >
              <span
                v-for="(ar, index3) in item.artists"
                :key="ar.id"
              >{{ ar.name }}<span v-if="index3 + 1 !== item.artists.length">/</span>
                <span style="padding-left: 2vw;">
                  {{ getDate(item.publishTime) }}
                </span>
              </span>
            </span>
          </div>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { numberConvert, dateConvert } from '@/utils/convert'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  albums: {
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

const emit = defineEmits(['load'])
const router = useRouter()
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
const getDate = computed(() => {
  return function(timestamp: number) {
    return dateConvert(timestamp, 'yyyy.MM.dd')
  }
})
const getIndex = computed(() => {
  return function(name: string) {
    return name.indexOf(props.searchKeyword)
  }
})

const toAlbumDetail = function (albumId: number) {
  router.push({
    path: '/album',
    query: {
      id: albumId
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
