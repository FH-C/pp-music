<template>
  <div
    v-if="homepagePlaylists.uiElement"
    style="background-color: white;"
  >
    <div>
      <div class="flex-row space-between margin-row-4 padding-4">
        <span class="bold">
          {{ homepagePlaylists?.uiElement?.subTitle?.title }}
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
        class="scroll-x"
      >
        <div
          v-for="(playlist, index) in props.homepagePlaylists.creatives"
          :key="playlist.creativeId"
          class="image"
          @click="toPlaylist(playlist.creativeId as string)"
        >
          <div class="flex-column flex-start">
            <van-image
              :src="playlist?.uiElement?.image?.imageUrl"
              radius="10"
            />
            <span class="text1 text-line-two">{{ playlist?.uiElement?.mainTitle?.title }}</span>
            <div
              :ref="el => { refs[index] = el }"
              class="text2"
            >
              <van-icon name="play" />
              {{ playCount(playlist?.resources[0]?.resourceExtInfo?.playCount as number) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, PropType, ref } from 'vue'
import { Icon, Image, Button } from 'vant'
import { numberConvert } from '@/utils/convert'
import { useRouter } from 'vue-router'
import { Block } from '@/types/homepage'
const router = useRouter()
const refs: any = ref([])
const props = defineProps({
  homepagePlaylists: {
    type: Object as PropType<Block>,
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
const toPlaylist = function (playlistId: number | string) {
  router.push({
    path: '/playlist',
    query: {
      id: playlistId,
    },
  })
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.image {
  width: 200px;
  margin-left: 4%;
  display:inline-block;
}
.text1 {
  white-space: normal;
  font-size: 24px;
  font-weight: 500;
}

.text2 {
  position: relative;
  top: -260px;
  left: 70px;
  font-size: 10px;
  background-color: rgba(128, 128, 128, 0.2);
  color: rgba($color: #ffffff, $alpha: 0.7);
  border-radius: 10px;
  width: 60%;
}

.more {
  border: 0px solid rgba(244, 244, 244, 0.1);
}

.image:nth-last-child(1) {
  margin-right: 4%;
}

.scroll-x {
  height: 300px;
}

</style>
