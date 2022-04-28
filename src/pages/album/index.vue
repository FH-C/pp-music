<template>
  <div class="content">
    <van-nav-bar
      left-arrow
      left-text="专辑"
      safe-area-inset-top
      fixed
      placeholder
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon
          name="search"
          size="18"
          color="#fff"
        />
      </template>
    </van-nav-bar>
    <AlbumMeansVue
      :album="album"
      :count="count"
    ></AlbumMeansVue>
    <SongListVue
      :song-list="songList"
      :num="songNum"
      :loading="false"
      :finished="true"
      finished-text=""
    ></SongListVue>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getAlbum, getAlbumDynamic } from '@/api/album'
import { getSongDetail } from '@/api/play'
import AlbumMeansVue from 'components/album/AlbumMeans.vue'
import SongListVue from 'components/album/SongList.vue'
import { onClickLeft } from '@/utils/router'
import { AlbumDynamicType, AlbumType } from '@/types/album'

const router = useRouter()
const route = useRoute()
const album = ref({} as AlbumType.Album)
const songList = ref([] as AlbumType.Song[])
const count = ref({} as AlbumDynamicType.Root)
const songNum = ref(0)
onMounted(async () => {
  await getData()
})

const getData = async function () {
  const res = await getAlbum({
    id: route.query.id
  })
  album.value = res.album
  songList.value = res.songs
  const res2 = await getAlbumDynamic({
    id: route.query.id
  })
  count.value = res2
  songNum.value = res.album.size
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');
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
