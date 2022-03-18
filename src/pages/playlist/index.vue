<template>
  <div class="content">
    <van-nav-bar
      left-arrow
      left-text="歌单" 
      safe-area-inset-top
      fixed
      placeholder
    >
      <template #right>
        <van-icon
          name="search"
          size="18"
          color="#fff"
        />
      </template>
    </van-nav-bar>
    <PlaylistMeansVue
      :playlist="playlist"
      :song-list="songList"
    ></PlaylistMeansVue>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getPlaylistDetail } from '../../api/playlist'
import { getSongDetail } from '../../api/play'
import PlaylistMeansVue from '../../components/playlist/PlaylistMeans.vue'

const router = useRouter()
const route = useRoute()
const playlist = ref({}) as any
const songList = ref([]) as any
onMounted(async () => {
  await getData()
})

const getData = async function () {
  const res = await getPlaylistDetail({
    id: route.query.id,
  })
  playlist.value = res.value.playlist
  const traceIds = playlist.value.trackIds.map((x: any) => {return x.id}).join(',')
  const res2 = await getSongDetail({
    ids: traceIds,
  })
  songList.value = res2.value.songs
}
</script>

<style scoped lang="scss">
@import url('../../styles/common.scss');
.content {
  :deep(.van-nav-bar) {
    background-color: #696e77;
  }
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
  :deep(.van-nav-bar__text) {
    color: #fff;
  }
}
</style>
