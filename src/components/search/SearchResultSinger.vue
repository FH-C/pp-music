<template>
  <div>
    <van-list
      v-model:loading="searchStore.loading"
      :finished="searchStore.finished"
      finished-text="到底啦~"
      @load="onLoad"
    >
      <van-cell
        v-for="item in searchStore.searchResultSinger.artists"
        :key="item.id"
        center
        @click="toArtistDetail(item.id)"
      >
        <div class="flex-row flex-start">
          <div>
            <van-image
              class="small-image"
              radius="50"
              :src="item.picUrl"
            />
          </div>
          <div
            class="text"
            style="margin: auto 0;"
          >
            <span class="medium-font text-line-one">
              <span v-if="getIndex(item.name) !== -1">{{ item.name.slice(0, getIndex(item.name)) }}</span>
              <span v-else>{{ item.name.slice(0) }}</span>
              <span
                v-if="getIndex(item.name) !== -1"
                class="font-blue"
              >
                {{ item.name.slice(getIndex(item.name), getIndex(item.name) + searchStore.searchKeyword.length) }}
              </span>
              <span v-if="getIndex(item.name) !== -1">
                {{ item.name.slice(getIndex(item.name) + searchStore.searchKeyword.length) }}
              </span>
              <span
                v-if="item.alias.length !== 0"
                style="color:#999999;"
              >
                ({{ item.alias[0] }})
              </span>
            </span>
          </div>
        </div>
        <template #right-icon>
          <div @click.stop="follow(item)">
            <van-button
              v-if="!item.followed"
              round
              plain
              color="#fe4545"
              size="mini"
            >
              + 关注
            </van-button>
            <van-button
              v-else
              round
              plain
              color="#a0a0a0"
              size="mini"
              icon="success"
            >
              已关注
            </van-button>
          </div>
        </template>
      </van-cell>
    </van-list>
  </div>
</template>

<script setup lang="ts">
import { numberConvert } from '@/utils/convert'
import { computed, ref } from 'vue'
import { useSearchStore } from '@/store/search'
import { useSongStore } from '@/store/song'
import { useRouter, useRoute } from 'vue-router'
import { subscribeArtist } from '@/api/artist'
const emit = defineEmits(['load'])
const searchStore = useSearchStore()
const songStore = useSongStore()
const router = useRouter()
const onLoad = function () {
  emit('load')
}
const playCount = computed(() => {
  return function(count: number) {
    return numberConvert(count)
  }
})
const getIndex = computed(() => {
  return function(name: string) {
    return name.indexOf(searchStore.searchKeyword)
  }
})

const toArtistDetail = function (artistId: number) {
  router.push({
    path: '/artist',
    query: {
      id: artistId
    }
  })
}
const follow = async function (artist: any) {
  const t = artist.followed ? '0' : '1'
  await subscribeArtist({
    id: artist.id,
    t: t
  })
  artist.followed = !artist.followed
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.text {
  padding-left: 4vw;
}
</style>
