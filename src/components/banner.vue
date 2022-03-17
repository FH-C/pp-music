<template>
  <div style="background-color: white;">
    <van-swipe
      :autoplay="5000"
      :lazy-render="true"
    >
      <van-swipe-item
        v-for="(banner, index) in props.bannerList"
        :key="banner.bannerId"
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
import { bannerListType } from '../types/types'
const props = defineProps({
  bannerList: {
    type: Array as PropType<bannerListType[]>,
    default: () => {
      return []
    },
  },
})
onMounted(() => {
  console.log(11111, props.bannerList)
})
const aaa = function () {
  console.log(11111, props.bannerList)
}
const getColor = function (color: string) {
  let bgColor = color
  if (color === 'red') {
    bgColor = '#fa4c49' 
  } else if (color === 'blue') {
    bgColor = '#3489cc'
  }
  return `background-color: ${ bgColor };`
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
