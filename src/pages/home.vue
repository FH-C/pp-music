<template>
  <div style="background-color: #f5f5f5;">
    <HomepageHeaderVue></HomepageHeaderVue>
    <van-pull-refresh
      v-model="loading"
      @refresh="onRefresh"
    >
      <div style="margin-top: 60px;">
        <Banner
          :banner-list="bannerList"
        ></Banner>
        <HomepageIconVue :homepage-icon-list="homepageIconList"></HomepageIconVue>
        <HomepagePlaylistVue
          :homepage-playlists="homepagePlaylists"
          style="margin-top: 10px;"
        ></HomepagePlaylistVue>
        <!-- <RecommendedPlaylistVue
        :recommend-playlists="recommendPlaylists"
        style="margin-top: 10px;"
      ></RecommendedPlaylistVue> -->
        <SongListHomepageVue :song-object="songObject"></SongListHomepageVue>
        <RecommendedSongListVue
          :recommended-song-list="recommendSonglist"
          style="margin-top: 10px;"
        ></RecommendedSongListVue>
      </div>
    </van-pull-refresh>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
      <van-tabbar
        v-model="active"
        active-color="#ff7979"
        :placeholder="true"
        :safe-area-inset-bottom="true"
      >
        <van-tabbar-item>
          <span>发现</span>
          <template #icon>
            <svg-icon
              v-if="active===0"
              name="discover-active"
            ></svg-icon>
            <svg-icon
              v-else
              name="discover"
            ></svg-icon>
          </template>
        </van-tabbar-item>
        <van-tabbar-item>
          <span>我的</span>
          <template #icon>
            <svg-icon
              v-if="active===1"
              name="note-active"
            ></svg-icon>
            <svg-icon
              v-else
              name="note"
            ></svg-icon>
          </template>
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/Banner.vue'
import { useRouter, useRoute } from 'vue-router'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon, Tabbar, TabbarItem, PullRefresh } from 'vant'
import SvgIcon from '../components/SvgIcon.vue'
import { computed, onMounted, ref, reactive } from 'vue'
import { onClickLeft } from '../utils/router'
import { loginStatus } from '../api/login'
import { blockPage } from '../api/home'
import { recommendResource, personalized, recommendSongs, personalizedNewsong, recommendVideo, personalizedMV,
} from '../api/recommend'
import { homepageIcon } from '../api/home'
import RecommendedPlaylistVue from '../components/RecommendedPlaylist.vue'
import HomepageHeaderVue from '../components/HomepageHeader.vue'
import RecommendedSongListVue from '../components/RecommendedSongList.vue'
import SongListHomepageVue from '../components/SongListHomepage.vue'
import HomepageIconVue from '../components/HomepageIcon.vue'
import HomepagePlaylistVue from '../components/HomepagePlaylist.vue'
import MiniPlayerVue from '../components/MiniPlayer.vue'
import { songListHomepageType, homepageiConType } from '../types/types'
const router = useRouter()
const bannerList = ref([])
const recommendPlaylists = ref([])
const recommendSonglist = ref([])
const songObject = ref({} as songListHomepageType)
const homepageIconList = ref([] as homepageiConType[])
const homepagePlaylists = ref([])
const active = ref(0)
const loading = ref(false)

const getBlockPage = async function (force = false) {
  const res = await blockPage({}, force)
  songObject.value = res.value.data.blocks[2]
  homepagePlaylists.value = res.value.data.blocks[1]
  bannerList.value = res.value.data.blocks[0].extInfo.banners
}

const getLoginStatus =  async function (force = false) {
  const res = await loginStatus(force)
}

const getHomepageIcon = async function (force = false) {
  const res = await homepageIcon(force)
  homepageIconList.value = res.value.data
}

const getRecommendSongs = async function (force = false) {
  const res = await recommendSongs(force)
  recommendSonglist.value = res.value.data.dailySongs
}

const getData = async function (force = false) {
  await getBlockPage(force)
  await getLoginStatus(force)
  await getHomepageIcon(force)
  await getRecommendSongs(force)
}

const onRefresh = async function () {
  await getData(true)
  loading.value = false
}

onMounted (async () => {
  getData()
  // console.log('songList.value:', songObject.value)
  // const res3 = await recommendResource()
  // console.log(res3)
  // const res4 = await personalized({
  //   limit: 6,
  // })
  // console.log(res4)
  // recommendPlaylists.value = res4.value.result
  // const res6 = await personalizedNewsong({})
  // console.log('res6:', res6)
  // const res7 = await recommendVideo({})
  // console.log('res7:', res7)
  // const res8 = await personalizedMV()
  // console.log('res8:', res8)
  return
})
</script>

<style scoped lang="scss">
@import url('../styles/common.scss');

</style>
