<template>
  <div style="background-color: #f5f5f5;">
    <homepageHeaderVue></homepageHeaderVue>
    <Banner
      :banner-list="bannerList"
      style="margin-top: 10px;"
    ></Banner>
    <RecommendedPlaylistVue
      :recommend-playlists="recommendPlaylists"
      style="margin-top: 10px;"
    ></RecommendedPlaylistVue>
  </div>
</template>

<script setup lang="ts">
import Banner from '../components/banner.vue'
import { useRouter, useRoute } from 'vue-router'
import { NavBar, Picker, Popup, Field, Button, Toast, Icon } from 'vant'
import { computed, onMounted, ref, reactive } from 'vue'
import { onClickLeft } from '../utils/router'
import { loginStatus } from '../api/login'
import { blockPage } from '../api/home'
import { recommendResource, personalized } from '../api/recommend'
import RecommendedPlaylistVue from '../components/RecommendedPlaylist.vue'
import homepageHeaderVue from '../components/homepageHeader.vue'
const bannerList = ref([])
const recommendPlaylists = ref([])
onMounted (async () => {
  const res = await loginStatus()
  const res2 = await blockPage({})
  bannerList.value = res2.data.data.blocks[0].extInfo.banners
  const res3 = await recommendResource()
  console.log(res3)
  const res4 = await personalized({
    limit: 6,
  })
  console.log(res4)
  recommendPlaylists.value = res4.data.result
  return
})
</script>

<style scoped>

</style>
