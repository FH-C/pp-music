<template>
  <div>
    <div
      v-if="props.album.picUrl"
      style="background-color: #6c6e74;"
      class="flex-row box"
    >
      <div>
        <van-image
          class="medium-image"
          radius="10"
          :src="props.album.picUrl"
        />
      </div>
      <div class="flex-column margin-row-4 text-left box2">
        <div class="medium-lighter-font white-font">
          {{ props.album.name }}
        </div>
        <div class="flex-grow-1 user">
          <div class="small-font white-font gray-font text">
            {{ `歌手：${props.album.artists[0].name}` }}
          </div>
        </div>
        <div class="small-font white-font gray-font text">
          {{ `发行时间：${dateConvert(props.album.publishTime, 'yyyy.MM.dd')}` }}
        </div>
        <div class="small-font white-font gray-font text-line-one">
          {{ props.album.description }}
        </div>
      </div>
    </div>
    <CommentCountVue
      :subscribed-count="props.count.subCount"
      :comment-count="props.count.commentCount"
      :share-count="props.count.shareCount"
    ></CommentCountVue>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { numberConvert } from '@/utils/convert'
import CommentCountVue from 'components/CommentCount.vue'
import { dateConvert } from '@/utils/convert'

const props = defineProps({
  album: {
    type: Object,
    default: () => {
      return {}
    },
  },
  count: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.box {
  padding: 40px 20px 60px;
}

.white-font {
  color: #fff;
}
.user {
  align-items: center;
  position: relative;
  top: 30px;
}
.text-left {
  text-align: left;
}

.text {
  position: relative;
  bottom: 5px;
}

.play-count-background {
  position: relative;
  top: -200px;
  left: 90px;
  font-size: 10px;
  background-color: rgba(128, 128, 128, 0.2);
  color: rgba($color: #ffffff, $alpha: 0.7);
  border-radius: 10px;
  width: 100px;
}

.box2 {
  height: 200px;
}
</style>