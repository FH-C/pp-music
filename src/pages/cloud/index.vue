<template>
  <div class="content">
    <van-nav-bar
      left-arrow
      left-text="音乐云盘" 
      safe-area-inset-top
      fixed
      placeholder
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon
          name="search"
          size="18"
          color="#555"
        />
      </template>
    </van-nav-bar>
    <div>
      <SongList
        :num="songNum"
        :finished="finished"
        :loading="loading"
        :song-list="songList"
        @load="load"
        @play-all="playAll"
      ></SongList>
    </div>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getCloudData, getCloudDataDetail, deleteCloudSongs, uploadCloudSong } from '@/api/cloud'
import { onClickLeft } from '@/utils/router'
import { useSongStore } from '@/store/song'
import SongList from '@/components/album/SongList.vue'

const songStore = useSongStore()
const songList = ref([])
const songNum = ref(0)
const currentPage = ref(0)
const loading = ref(false)
const limit = ref(60)
const finished = ref(false)
onMounted(async () => {
  // await deleteCloudSongs({})
  // await uploadCloudSong({})
})
const load = async () => {
  loading.value = true
  const res = await getCloudData({
    limit: limit.value,
    offset: currentPage.value++ * limit.value,
  })
  if (!res.value) {
    finished.value = true
    return loading.value = false
  }
  if (songList.value.length === 0) {
    songList.value = res.value.data.map((item: any) => {
      if (!item.simpleSong.al.name) {
        item.simpleSong.al.name = item.album
        item.simpleSong.ar[0].name = item.artist
      }
      return item.simpleSong
    })
  } else {
    console.log(songList.value.length === 0)
    songList.value = songList.value.concat(res.value.data.map((item: any) => {
      if (!item.simpleSong.al.name) {
        item.simpleSong.al.name = item.album
        item.simpleSong.ar[0].name = item.artist
      }
      return item.simpleSong
    }))
  }
  finished.value = res.value.hasMore !== undefined && !res.value.hasMore
  songNum.value = res.value.count
  if (!finished.value) {
    await load()
  }
}

const playAll = async function () {
  songStore.playingSongList = []
  for (let i=0; i < songNum.value / 200; i++) {
    console.log(songNum.value / 200)
    const res = await getCloudData({
      limit: 200,
      offset: i * 200,
    })
    songStore.playingSongList = songStore.playingSongList.concat(res.value.data.map((item: any) => {
      if (!item.simpleSong.al.name) {
        item.simpleSong.al.name = item.album
        item.simpleSong.ar[0].name = item.artist
      }
      return item.simpleSong
    }))
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
  }
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
.content {
  :deep(.van-nav-bar) {
    background-color: #fff;
  }
  :deep(.van-nav-bar__arrow) {
    color: #555;
  }
  :deep(.van-nav-bar__text) {
    color: #555;
  }
}
</style>
