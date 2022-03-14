<template>
  <div
    style="background-color: white;"
  >
    <div class="flex-row space-between margin-row-4 padding-4">
      <span
        v-if="props.songObject.uiElement"
        class="bold"
      >
        {{ props.songObject.uiElement.subTitle.title }}
      </span>
      <span>
        <Button
          plain
          color="#000000"
          round
          style="border: 0px;"
          class="play-button"
        ><van-icon name="play" />
          播放
        </Button>
      </span>
    </div>
    <van-swipe
      class="margin-row-4"
      indicator-color="white"
      :loop="false"
    >
      <van-swipe-item
        v-for="(item, index) in props.songObject.creatives"
        :key="index"
        lazy-render
      >
        <span
          v-for="(song, index2) in item.resources"
          :key="index2"
          @click="playSong(song)"
        >
          <div class="flex-row flex-start padding-column-2">
            <div>
              <van-image
                class="small-image"
                radius="10"
                :src="song.uiElement.image.imageUrl"
              />
            </div>
            <div
              class="flex-grow-2 justify-content-center margin-auto"
              style="padding-left: 10px;"
            >
              <div class="text-line-one">
                <span
                  class="medium-font"
                  style="font-weight: 650;"
                >
                  {{ song.uiElement.mainTitle.title }}
                </span>
                <span
                  v-if="song.resourceExtInfo.songData.alias.length > 0"
                  class="medium-font"
                >({{ song.resourceExtInfo.songData.alias[0] }})</span>
                <span
                  v-if="song.resourceExtInfo.artists.length > 0"
                  class="small-font"
                >
                  -<span
                    v-for="(ar, index3) in song.resourceExtInfo.artists"
                    :key="ar.id"
                  >{{ ar.name }}<span v-if="index3 + 1 !== song.resourceExtInfo.artists.length">/</span></span>
                </span>
              </div>
              <div class="text-line-one">
                <span v-if="song.uiElement.subTitle && song.uiElement.subTitle.title">
                  <span v-if="song.uiElement.subTitle.titleType === 'songRcmdTag'">
                    <van-tag
                      color="#fef3da"
                      text-color="#f6b51f"
                    >{{ song.uiElement.subTitle.title }}</van-tag>
                  </span>
                  <span
                    v-else-if="song.uiElement.subTitle.titleType === 'songRcmdFromComment'"
                    class="small-font"
                  >
                    {{ song.uiElement.subTitle.title }}
                  </span>
                </span>
              </div>
            </div>
            <div
              class="margin-auto"
            >
              <van-icon
                name="play-circle-o"
                style="align-self: flex-end;"
                class="play-icon"
              />
            </div>
          </div>
        </span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup lang="ts">
import { songListHomepageType } from '../types/types'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image, Swipe, SwipeItem, Tag } from 'vant'
import { onMounted, PropType, watch } from 'vue'
import { useSongStore } from '../store/song'
const props = defineProps({
  songObject: {
    type: Object as PropType<songListHomepageType>,
    default: () => {
      return {}
    },
  },
})
const songStore = useSongStore()
const playSong = function (song: object) {
  if (songStore.playStatus) {

  } else {
    songStore.playingId = song.resourceId
    songStore.showPlayer = true
  }
}
onMounted(() => {
  console.log('props.songObject', props.songObject)
})
</script>

<style scoped>
@import url('../styles/common.scss');
</style>