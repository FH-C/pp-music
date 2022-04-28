<template>
  <div style="background-color: white;">
    <van-swipe
      :autoplay="5000"
      :lazy-render="true"
    >
      <van-swipe-item
        v-for="(banner, index) in props.bannerList"
        :key="banner.bannerId"
        @click="onClickBanner(index)"
      >
        <van-image
          :src="banner.pic"
          class="image"
          :radius="10"
        />
        <span
          class="custom-indicator"
          :style="getColor(props.bannerList[index]['titleColor'])"
        >
          {{ props.bannerList[index]['typeTitle'] }}
        </span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType } from 'vue'
import { Swipe, SwipeItem, Image } from 'vant'
import { bannerListType } from '@/types/types'
import { useSongStore } from '@/store/song'
import { useRouter } from 'vue-router'
const props = defineProps({
  bannerList: {
    type: Array as PropType<bannerListType[]>,
    default: () => {
      return []
    }
  }
})
const songStore = useSongStore()
const router = useRouter()
const getColor = function (color: string) {
  let bgColor = color
  if (color === 'red') {
    bgColor = '#fa4c49'
  } else if (color === 'blue') {
    bgColor = '#3489cc'
  }
  return `background-color: ${bgColor};`
}

const onClickBanner = function (index: number) {
  console.log(index)
  if (props.bannerList[index].targetType === 1) {
    songStore.playingId = props.bannerList[index].song.id
    songStore.playingSongList = [props.bannerList[index].song]
    songStore.playingIndex = 0
    setTimeout(() => {
      songStore.playStatus = false
    }, 200)
    setTimeout(() => {
      songStore.playStatus = true
    }, 200)
  } else if (props.bannerList[index].targetType === 10) {
    router.push({
      path: 'album',
      query: {
        id: props.bannerList[index].targetId
      }
    })
  } else if (props.bannerList[index].targetType === 1000) {
    router.push({
      path: 'playlist',
      query: {
        id: props.bannerList[index].targetId
      }
    })
  } else if (props.bannerList[index].targetType === 3000) {
    location.href = props.bannerList[index].url
  }
}
</script>

<style scoped lang="scss">
.custom-indicator {
  position: absolute;
  right: 4%;
  bottom: 8px;
  /* padding: 2px 5px; */
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.image {
  width: 92%;
}
</style>
