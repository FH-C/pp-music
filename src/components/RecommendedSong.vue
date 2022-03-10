<template>
  <div class="flex-row flex-start">
    <div>
      <van-image
        class="small-image"
        radius="10"
        :src="props.recommendedSong.al.picUrl"
      />
      <!-- <van-icon
        name="play"
        style="color: white;"
        class="play"
      /> -->
    </div>
    <div
      class="flex-row flex-grow-2 text-line-one justify-content-center margin-auto"
      style="padding-left: 10px;"
    >
      <span
        class="medium-font"
        style="font-weight: 650;"
      >
        {{ props.recommendedSong.name }}
      </span>
      <span
        v-if="props.recommendedSong.alia.length > 0"
        class="medium-font"
      >({{ props.recommendedSong.alia[0] }})</span>
      <span
        v-if="props.recommendedSong.ar.length > 0"
        class="small-font"
      >
        -<span
          v-for="(ar, index) in props.recommendedSong.ar"
          :key="ar.id"
        >{{ ar.name }}<span v-if="index + 1 !== props.recommendedSong.ar.length">/</span></span>
      </span>
    </div>
    <div class="margin-auto">
      <van-icon
        name="play-circle-o"
        style="align-self: flex-end;"
        class="play-icon"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'

const props = defineProps({
  recommendedSong: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<style scoped>
@import url('../styles/common.scss');

</style>