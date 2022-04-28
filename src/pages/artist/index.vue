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
          :finished="true"
          finished-text=""
        ></SongListVue>
        <van-cell
          center
          clickable
          style="margin-bottom: 5vh;"
        >
          <template #value>
            <div
              style="text-align: center;color: #9a9a9a;"
              @click="showAllSongs"
            >
              <span>全部演唱</span>
              <van-icon name="arrow" />
            </div>
          </template>
        </van-cell>
      </van-tab>
      <van-tab title="专辑">
        <ArtistAlbumsVue
          :albums="albums"
          :loading="loading"
          :finished="finished"
          @load="loadAlbums"
        ></ArtistAlbumsVue>
      </van-tab>
      <van-tab title="视频">
        <VideosVue
          :videos="videoList"
          :loading="loading"
          :finished="finished"
          @load="loadVideos"
        ></VideosVue>
      </van-tab>
    </van-tabs>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  getArtistDetail, getArtistDesc, getArtistFollowCount, getSimilarArtists, subscribeArtist,
  getArtistHotSongs, getArtistAlbum, getArtistVideos
} from '@/api/artist'
import ArtistInfo from 'components/artist/ArtistInfo.vue'
import ArtistWikiVue from '@/components/artist/ArtistWiki.vue'
import SongListVue from '@/components/album/SongList.vue'
import ArtistAlbumsVue from '@/components/artist/ArtistAlbums.vue'
import VideosVue from '@/components/Videos.vue'
import { onClickLeft } from '@/utils/router'
import { ArtistFollowType, ArtistDetailType, SimilarArtistsType, ArtistHotSongsType, ArtistVideosType, SubArtistType, ArtistHotAlbumsType } from '@/types/artist'

const router = useRouter()
const route = useRoute()
const artistInfo: any = ref({})
const imageURL = ref('')
const active = ref(0)
const similarArtists = ref([] as SimilarArtistsType.Artist[])
const introduction = ref('暂无介绍')
const songList = ref([] as ArtistHotSongsType.HotSong[])
const videoList = ref([] as ArtistVideosType.Record[])
const songNum = ref(0)
const currentAlbumPage = ref(0)
const currentVideoPage = ref(0)
const loading = ref(false)
const albums: any = ref([] as ArtistHotAlbumsType.HotAlbum[])
const limit = ref(10)
const finished = ref(false)
onMounted(async () => {
  await getData()
})

const getData = async function () {
  await getCount()
  await getInfo()
  await getArtistDesc({
    id: route.query.id
  })
  await getSimilar()
  await getSongs()
  // await getVideos()
}

const getCount = async function () {
  const res = await getArtistFollowCount({
    id: route.query.id
  })
  artistInfo.value.followCount = res.data.fansCnt
  artistInfo.value.isFollowed = res.data.isFollow
  artistInfo.value.id = route.query.id
}
const getInfo = async function () {
  const res = await getArtistDetail({
    id: route.query.id
  })
  artistInfo.value.name = res.data.artist.name
  artistInfo.value.identity = res.data.identify.imageDesc
  imageURL.value = res.data.user?.backgroundUrl || res.data.artist?.cover
  introduction.value = res.data.artist.briefDesc
  songNum.value = res.data.artist.musicSize
}

const getSimilar = async function () {
  const res = await getSimilarArtists({
    id: route.query.id
  })
  similarArtists.value = res.artists
}
const getSongs = async function () {
  const res = await getArtistHotSongs({
    id: route.query.id
  })
  songList.value = res.hotSongs
}
const getVideos = async function () {
  const res = await getArtistVideos({
    id: route.query.id
  })
  videoList.value = res.data.records
}
const follow = async function (info: any) {
  const res = await subscribeArtist({
    id: info.id,
    t: info.follow ? '1' : '0'
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
const loadAlbums = async function () {
  loading.value = true
  const res = await getArtistAlbum({
    id: route.query.id,
    limit: limit.value,
    offset: currentAlbumPage.value * limit.value
  })
  if (currentAlbumPage.value === 0) {
    albums.value = res.hotAlbums
  } else {
    albums.value = albums.value.concat(res.hotAlbums)
  }
  loading.value = false
  finished.value = !res.more
  currentAlbumPage.value++
}
const loadVideos = async function () {
  loading.value = true
  const res = await getArtistVideos({
    id: route.query.id,
    size: limit.value,
    cursor: currentVideoPage.value * limit.value,
    order: 0
  })
  if (currentVideoPage.value === 0) {
    videoList.value = res.data.records
  } else {
    videoList.value = videoList.value.concat(res.data.records)
  }
  loading.value = false
  finished.value = !res.data.page.more
  currentVideoPage.value++
}
const showAllSongs = function () {
  router.push({
    path: '/song-list',
    query: {
      id: route.query.id
    }
  })
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
