<template>
  <div style="background-color: white;">
    <div class="flex-row space-between margin-row-4 padding-4">
      <span class="bold">
        每日推荐
      </span>
      <span>
        <Button
          plain
          color="#000000"
          round
          style="border: 0px;"
          class="play-button"
        ><van-icon name="play" />播放</Button>
      </span>
    </div>
    <van-swipe
      class="margin-row-4"
      indicator-color="white"
    >
      <van-swipe-item
        v-for="i in recommendedSongList.length / 3"
        :key="i"
        lazy-render
      >
        <span
          v-for="recommendedSong in recommendedSongList.slice((i-1)*3, i*3)"
          :key="recommendedSong.id"
        >
          <RecommendedSongVue
            :recommended-song="recommendedSong"
            style="padding-top: 10px;"
          ></RecommendedSongVue>
        </span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { recommendedSongsType } from '@/types/types'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image, Swipe, SwipeItem } from 'vant'
import { onMounted, PropType } from 'vue'
import RecommendedSongVue from './RecommendedSong.vue'
const props = defineProps({
  recommendedSongList: {
    type: Array as PropType<recommendedSongsType[]>,
    default: () => {
      return []
    },
  },
})
</script>

<style scoped>
@import url('@/style/common.scss');
</style>