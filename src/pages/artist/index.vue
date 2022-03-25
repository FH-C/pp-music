<template>
  <div style="background-color: #f0f0f0;height: 100vh;">
    <van-image
      width="100vw"
      height="40vh"
      fit="fill"
      :src="imageURL"
      class="image"
    />
    <van-nav-bar
      left-arrow
      safe-area-inset-top
      class="left-nav-bar"
      @click-left="onClickLeft"
    >
    </van-nav-bar>
    <ArtistInfo
      :info="artistInfo"
      :similar-artists="similarArtists"
      class="card"
      @follow="follow"
    ></ArtistInfo>
    <van-tabs
      v-model:active="active"
      swipeable
      class="tabs"
    >
      <van-tab title="主页">
        <ArtistWikiVue :introduction="introduction"></ArtistWikiVue>
      </van-tab>
      <van-tab title="歌曲">
        <SongListVue
          :song-list="songList"
          title="播放热门50"
        ></SongListVue>
      </van-tab>
      <van-tab title="专辑">专辑</van-tab>
      <van-tab title="视频">视频</van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getArtistDetail, getArtistDesc, getArtistFollowCount, getSimilarArtists, subscribeArtist,
  getArtistHotSongs } from '@/api/artist'
import { getSongDetail } from '@/api/play'
import ArtistInfo from 'components/artist/ArtistInfo.vue'
import ArtistWikiVue from '@/components/artist/ArtistWiki.vue'
import SongListVue from '@/components/album/SongList.vue'
import { onClickLeft } from '@/utils/router'

const router = useRouter()
const route = useRoute()
const artistInfo: any = ref({})
const imageURL = ref('')
const active = ref(0)
const similarArtists = ref([])
const introduction = ref('暂无介绍')
const songList = ref([])
onMounted(async () => {
  await getData()
})

const getData = async function () {
  await getCount()
  await getInfo()
  await getArtistDesc({
    id: route.query.id,
  })
  await getSimilar()
  await getSongs()
}

const getCount = async function () {
  const res = await getArtistFollowCount({
    id: route.query.id,
  })
  artistInfo.value.followCount = res.value.data.fansCnt
  artistInfo.value.isFollowed = res.value.data.isFollow
  artistInfo.value.id = route.query.id
}
const getInfo = async function () {
  const res = await getArtistDetail({
    id: route.query.id,
  })
  artistInfo.value.name = res.value.data.artist.name
  artistInfo.value.identity = res.value.data.identify.imageDesc
  imageURL.value = res.value.data.artist.cover
  introduction.value = res.value.data.artist.briefDesc
}

const getSimilar = async function () {
  const res = await getSimilarArtists({
    id: route.query.id,
  })
  similarArtists.value = res.value.artists
}
const getSongs = async function () {
  const res = await getArtistHotSongs({
    id: route.query.id,
  })
  songList.value = res.value.hotSongs
}
const follow = async function (info: any) {
  const res = await subscribeArtist({
    id: info.id,
    t: info.follow ? '1' : '0',
  })
  if (info.type) {
    (similarArtists as any).value = similarArtists.value.map((x: any) => {
      if (x.id === info.id) {
        x.followed = !x.followed
      }
      return x
    })
  } else {
    artistInfo.value.isFollowed = !artistInfo.value.isFollowed
  }
}
</script>

<style scoped lang="scss">
@import url('@/style/common.scss');

.card {
  width: 90vw;
  margin: 0 auto;
  position: relative;
  top: -2vh;
}

.left-nav-bar {
  position: absolute;
  top: 0;
  :deep(.van-nav-bar__arrow) {
    color: #fff;
  }
}

.tabs {
  :deep(.van-tabs__nav) {
    background: #f0f0f0;
  }
}
</style>
