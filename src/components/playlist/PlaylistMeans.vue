<template>
  <div>
    <div
      v-if="props.playlist.coverImgUrl"
      style="background-color: #6c6e74;"
      class="flex-row box"
    >
      <div>
        <van-image
          class="medium-image"
          radius="10"
          :src="props.playlist.coverImgUrl"
        />
        <div class="play-count-background">
          <van-icon name="play" />
          {{ playCount(props.playlist.playCount) }}
        </div>
      </div>
      <div class="flex-column margin-row-4 text-left box2">
        <div class="medium-lighter-font white-font">
          {{ props.playlist.name }}
        </div>
        <div class="flex-row flex-grow-1 user">
          <div>
            <van-image
              class="mini-image"
              radius="50"
              :src="props.playlist.creator.avatarUrl"
            />
          </div>
          <div class="small-font white-font gray-font margin-left-2 text">
            {{ props.playlist.creator.nickname }}
          </div>
        </div>
        <div class="small-font white-font gray-font">
          {{ props.playlist.description }}
        </div>
      </div>
    </div>
    <CommentCountVue
      :subscribed-count="props.playlist.subscribedCount"
      :comment-count="props.playlist.commentCount"
      :share-count="props.playlist.shareCount"
    ></CommentCountVue>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { numberConvert } from '../../utils/number'
import CommentCountVue from './CommentCount.vue'

const props = defineProps({
  playlist: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
const playCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');

.box {
  padding: 40px 20px 60px;
}

.white-font {
  color: #fff;
}

.gray-font {
  color: #93959a;
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