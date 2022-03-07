<template>
  <div class="flex-row">
    <div>
      <van-image
        width="100"
        height="100"
        :src="props.recommendedSong.al.picUrl"
      />
    </div>
    <div class="flex-column">
      <span>
        {{ props.recommendedSong.name }}
      </span>
      <span v-if="props.recommendedSong.alia.length > 0">{{ props.recommendedSong.alia[0] }}</span>
      <span></span>
    </div>
    <div>
      <van-icon name="play-circle-o" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Image } from 'vant'
interface recommendedSongsType {
  al: object,
  name: string,
  alia: Array<string>
}
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