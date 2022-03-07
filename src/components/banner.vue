<template>
  <div style="background-color: white;">
    <van-swipe
      :autoplay="5000"
      :lazy-render="true"
    >
      <van-swipe-item
        v-for="banner in props.bannerList"
        :key="banner.bannerId"
      >
        <van-image
          :src="banner.pic"
          style="width: 92%;"
          radius="10"
        />
      </van-swipe-item>
      <template
        v-if="props.bannerList[active]"
        #indicator="{active}"
      >
        <div
          class="custom-indicator"
          :style="getColor(props.bannerList[active]['titleColor'])"
        >
          {{ props.bannerList[active]['typeTitle'] }}
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType } from 'vue'
import { Swipe, SwipeItem, Image } from 'vant'
interface BannerListType{
    bannerId: string,
    pic: string,
    typeTitle: string,
    titleColor: string
}
const props = defineProps({
  bannerList: {
    type: Array as PropType<BannerListType[]>,
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
  return `background-color: ${ color };`
}
</script>

<style scoped>
.custom-indicator {
  position: absolute;
  right: 20px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(0, 0, 0, 0.1);
}
</style>
