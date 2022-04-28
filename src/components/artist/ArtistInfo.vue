<template>
  <div class="card">
    <div class="bold name">{{ props.info.name }}</div>
    <div class="medium-font gray-font">
      {{ props.info.followCount ? (followCount(props.info.followCount) + ' 粉丝') : '' }}
    </div>
    <div class="medium-font gray-font">{{ props.info.identity }}</div>
    <div class="button flex-row align-items-center justify-content-center">
      <van-button
        v-if="!props.info.isFollowed"
        round
        color="#fe4545"
        size="mini"
        @click="emit('follow', {id: props.info.id, follow: !props.info.isFollowed})"
      >
        + 关注
      </van-button>
      <van-button
        v-else
        round
        color="#a0a0a0"
        size="mini"
        icon="success"
        @click="emit('follow', {id: props.info.id, follow: !props.info.isFollowed})"
      >
        已关注
      </van-button>
      <van-icon
        v-if="!showSimilar"
        name="arrow-down"
        @click="showSimilar = !showSimilar"
      />
      <van-icon
        v-else
        name="arrow-up"
        @click="showSimilar = !showSimilar"
      />
    </div>
    <SimilarArtistsVue
      v-if="showSimilar"
      :artists="similarArtists"
      @follow="followArtist"
    ></SimilarArtistsVue>
  </div>
</template>

<script setup lang="ts">
import { ArtistFollowType, SimilarArtistsType } from '@/types/artist'
import { numberConvert } from '@/utils/convert'
import { computed, PropType, ref } from 'vue'
import SimilarArtistsVue from './SimilarArtists.vue'
const emit = defineEmits(['follow'])
const props = defineProps({
  info: {
    type: Object as PropType<ArtistFollowType.Data>,
    default: () => ({})
  },
  similarArtists: {
    type: Array as PropType<SimilarArtistsType.Artist[]>,
    default: () => ([])
  }
})
const showSimilar = ref(false)
const followCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
const followArtist = (info: any) => {
  emit('follow', { id: info.id, follow: info.follow, type: 'similar' })
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.card {
  background-color: #fff;
  border-radius: 20px;
  div {
    padding-top: 20px;
  }
  padding-bottom: 10px;
}

.gray-font {
  color: #8d8d8d;
}

.name {
  font-size: 40px;
}

.button {
  :deep(.van-button--mini) {
    padding: 0 40px;
  }
}

</style>
