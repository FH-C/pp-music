<template>
  <div class="content">
    <van-nav-bar
      left-arrow
      left-text="全部演唱" 
      safe-area-inset-top
      fixed
      placeholder
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <div>
      <SongListVue
        :num="songNum"
        :song-list="songList"
        :loading="loading"
        :finished="finished"
        @load="load"
      ></SongListVue>
    </div>
  </div>
  <div class="fixed-left-bottom">
    <MiniPlayerVue></MiniPlayerVue>
  </div>
</template>

<script setup lang="ts">
import { onClickLeft } from '@/utils/router'
import SongListVue from '@/components/album/SongList.vue'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { getArtistSongs } from '@/api/artist'
import { getSongDetail } from '@/api/play'
const route = useRoute()
const songList = ref([])
const songNum = ref(0)
const order = ref('hot')
const limit = ref(30)
const currentPage = ref(0)
const loading = ref(false)
const finished = ref(false)
const load = async function () {
  loading.value = true
  const res = await getArtistSongs({
    id: route.query.id,
    limit: limit.value,
    offset: currentPage.value * limit.value,
    order: order.value,
  })
  const res2 = await getSongDetail({
    ids: res.value.songs.map((song: any) => song.id).join(','),
  })
  for (let i = 0; i < res.value.songs.length; i++) {
    for (let j = 0; j < res2.value.songs.length; j++) {
      if (res.value.songs[i].id === res2.value.songs[j].id) {
        res.value.songs[i].al.picUrl = res2.value.songs[j].al.picUrl
        break
      }
    }
  }
  if (currentPage.value === 0) {
    songList.value = res.value.songs
    songNum.value = res.value.total
  } else {
    songList.value = songList.value.concat(res.value.songs)
  }
  loading.value = false
  finished.value = !res.value.more
  currentPage.value ++
}
const playAll = async function () {
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.content {
  :deep(.van-nav-bar__arrow) {
    color: #000;
  }
  :deep(.van-nav-bar__text) {
    color: #000;
  }
}
</style>
