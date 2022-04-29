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
        @play-all="playAll"
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
import { useSongStore } from '@/store/song'
import { ArtistSongsType } from '@/types/artist'
import { SongDetailType } from '@/types/song'
const songStore = useSongStore()
const route = useRoute()
const songList = ref([] as ArtistSongsType.Song[])
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
    order: order.value
  })
  const res2 = await getSongDetail({
    ids: res.songs.map((song: any) => song.id).join(',')
  })
  for (let i = 0; i < res.songs.length; i++) {
    for (let j = 0; j < res2.songs.length; j++) {
      if (res.songs[i].id === res2.songs[j].id) {
        res.songs[i].al.picUrl = res2.songs[j].al.picUrl
        break
      }
    }
  }
  if (currentPage.value === 0) {
    songList.value = res.songs
    songNum.value = res.total
  } else {
    songList.value = songList.value.concat(res.songs)
  }
  loading.value = false
  finished.value = !res.more
  currentPage.value++
}
const playAll = async function () {
  songStore.playingSongList = []
  for (let i = 0; i < songNum.value / 200; i++) {
    const res = await getArtistSongs({
      id: route.query.id,
      limit: 200,
      offset: i * 200,
      order: order.value
    })
    const res2 = await getSongDetail({
      ids: res.songs.map((song: any) => song.id).join(',')
    })
    for (let i = 0; i < res.songs.length; i++) {
      for (let j = 0; j < res2.songs.length; j++) {
        if (res.songs[i].id === res2.songs[j].id) {
          res.songs[i].al.picUrl = res2.songs[j].al.picUrl
          break
        }
      }
    }
    songStore.playingSongList = songStore.playingSongList.concat(res.songs as unknown as SongDetailType.Song[])
    if (i === 0) {
      songStore.playingIndex = 0
      songStore.playingId = songStore.playingSongList[songStore.playingIndex].id
      songStore.showPlayer = true
      setTimeout(() => {
        songStore.playStatus = false
      }, 200)
      setTimeout(() => {
        songStore.playStatus = true
      }, 200)
    }
    break
  }
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
