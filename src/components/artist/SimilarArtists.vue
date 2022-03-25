<template>
  <div class="scroll-x flex-row">
    <SimilarArtistVue
      v-for="artist in props.artists"
      :key="artist.id"
      :info="artist"
      @follow="emit('follow', {id: artist.id, follow: !artist.followed})"
    ></SimilarArtistVue>
  </div>
</template>

<script setup lang="ts">
import SimilarArtistVue from './SimilarArtist.vue'
const emit = defineEmits(['follow'])
const props = defineProps({
  artists: {
    type: Array as any,
    default: () => ([]),
  },
})
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
</style>