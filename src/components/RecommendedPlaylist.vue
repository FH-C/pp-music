<template>
  <div style="background-color: white;">
    <div>
      <div class="flex-row space-between margin-row-4 padding-4">
        <span class="bold">
          推荐歌单
        </span>
        <span>
          <Button
            plain
            color="#000000"
            round
            class="more play-button"
          >更多<van-icon name="arrow" /></Button>
        </span>
      </div>
      <div
        class="scroll-x flex-row"
        style="height: 160px;"
      >
        <div
          v-for="playlist in props.recommendPlaylists"
          :key="playlist.id"
          class="image"
          @click="toPlaylist(playlist.id)"
        >
          <div class="flex-column flex-start">
            <van-image
              :src="playlist.picUrl"
              radius="10"
            />
            <span class="text1 text-line-two">{{ playlist.name }}</span>
            <span class="text2">{{ playCount(playlist.playCount) }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType } from 'vue'
import { Icon, Image, Button } from 'vant'
import { numberConvert } from '../utils/convert'
import { recommendedPlaylistsType } from '../types/types'

const props = defineProps({
  recommendPlaylists: {
    type: Array as PropType<recommendedPlaylistsType[]>,
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
const toPlaylist = function (playlistId: number) {
  console.log(playlistId)
}
</script>

<style scoped lang="scss">
@import url('../styles/common.scss');
.image {
  width: 27%;
  margin-left: 4%;
  display:inline-block;
}
.text1 {
  white-space: normal;
  font-size: 24px;
  font-weight: 600;
}

.text2 {
  position: relative;
  top: -270px;
  left: 54px;
  font-size: 10px;
  background-color: rgba(128, 128, 128, 0.2);
  color: rgba($color: #ffffff, $alpha: 0.7);
  border-radius: 10px;
}

.more {
  border: 0px solid rgba(244, 244, 244, 0.1);
}

</style>
