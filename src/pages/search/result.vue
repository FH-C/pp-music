<template>
  <div>
    <van-field
      v-model="searchStore.searchKeyword"
      clearable
      :placeholder="showKeyword"
      class="input-field"
      size="large"
      @click="onClickField"
    >
      <template #left-icon>
        <van-icon
          name="arrow-left"
          style="padding-right: 10px;"
          @click.stop="() => { onClickLeft(); searchStore.searchKeyword = '' }"
        />
      </template>
    </van-field>
    <div>
      <van-tabs
        v-model:active="searchStore.active"
        swipeable
        animated
      >
        <van-tab
          v-for="(item, index) in tabs"
          :key="item"
          :title="item"
          :disabled="[1, 2, 3, 4, 6].indexOf(index) === -1"
        >
          <keep-alive>
            <component
              :is="components[index]"
              :videos="searchStore.searchResultVideo.videos"
              :loading="searchStore.loading"
              :finished="searchStore.finished"
              @load="search"
            ></component>
          </keep-alive>
        </van-tab>
        <!-- <van-tab
          key="综合"
          title="综合"
        >
        </van-tab>
        <van-tab
          key="单曲"
          title="单曲"
        >
          <SearchResultSongVue @load="search"></SearchResultSongVue>
        </van-tab>
        <van-tab
          key="歌单"
          title="歌单"
        >
          <SearchResultPlaylistVue @load="search"></SearchResultPlaylistVue>
        </van-tab> -->
      </van-tabs>
    </div>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Field, Cell, Tab, Tabs, Toast } from 'vant'
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { onClickLeft } from '@/utils/router'
import SearchCardVue from 'components/search/SearchCard.vue'
import { useSearchStore } from '@/store/search'
import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
} from '@/api/search'
import { useRoute } from 'vue-router'
import { types, tabs, components } from '@/utils/search'
import { updateSearchHistoryLocalStorage } from '@/utils/localStorage'
import router from '@/router'

const route = useRoute()
const showKeyword = ref('')
const searchHotList = ref([])
const searchHotDetailList = ref([])
const keywordList = ref([])
const searchSuggestList = ref([])
const showSearchResult = ref(false)
const searchStore = useSearchStore()
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
  searchStore.searchKeyword = route.query.key as string
  await search()
})
watch(() => searchStore.active, async () =>{
  await search()
})
const onClickField = async function () {
  await onUpdate(searchStore.searchKeyword)
  router.push({
    path: '/search',
  })
}
const getDefaultKey = async function() {
  const res = await searchDefault(true)
  showKeyword.value = res.value.data.showKeyword
}
const getSearchHot = async function() {
  const res = await searchHot(true)
  searchHotList.value = res.value.result.hots
}
const getsearchHotDetail = async function() {
  const res = await searchHotDetail(true)
  searchHotDetailList.value = res.value.data
  keywordList.value = searchHotDetailList.value
}

const onUpdate = async function (value: string) {
  if (!value) {
    return
  }
  const res = await searchSuggest({
    keywords: value,
    type: 'mobile',
  }, true)
  searchStore.searchSuggestList = res.value.result.allMatch
}
onUnmounted (() => {
})
const searchSong = async function () {
  let res = undefined
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active],
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultSong = res.value.result
  } else {
    searchStore.searchResultSong.songs = searchStore.searchResultSong.songs.concat(res.value.result.songs)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.songCount) {
    searchStore.finished = true
  }
}

const searchPlaylist = async function () {
  let res = undefined
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active],
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultPlaylist = res.value.result
  } else {
    searchStore.searchResultPlaylist.playlists = searchStore.searchResultPlaylist.playlists.concat(
      res.value.result.playlists)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.playlistCount) {
    searchStore.finished = true
  }
}
const searchAlbum = async function () {
  let res = undefined
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active],
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultAlbum = res.value.result
  } else {
    searchStore.searchResultAlbum.albums = searchStore.searchResultAlbum.albums.concat(res.value.result.albums)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.albumCount) {
    searchStore.finished = true
  }
}
const searchSinger = async function () {
  let res = undefined
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active],
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultSinger = res.value.result
  } else {
    searchStore.searchResultSinger.artists = searchStore.searchResultSinger.artists.concat(res.value.result.artists)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.artistCount) {
    searchStore.finished = true
  }
}
const searchVideo = async function () {
  let res = undefined
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active],
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultVideo = res.value.result
  } else {
    searchStore.searchResultVideo.videos = searchStore.searchResultVideo.videos.concat(res.value.result.videos)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.videoCount) {
    searchStore.finished = true
  }
}
const search = async function (keyword?: string) {
  if (keyword) {
    searchStore.searchKeyword = keyword
    searchStore.currentOffsetList[searchStore.active] = 0
  } else {
    if (!searchStore.searchKeyword) {
      searchStore.searchKeyword = showKeyword.value
      searchStore.currentOffsetList[searchStore.active] = 0
    }
  }
  updateSearchHistoryLocalStorage(searchStore.searchKeyword)
  if (searchStore.active === 1) {
    await searchSong()
  } else if (searchStore.active === 2) {
    await searchPlaylist()
  } else if (searchStore.active === 3) {
    await searchVideo()
  } else if (searchStore.active === 4) {
    await searchSinger()
  } else if (searchStore.active === 6) {
    await searchAlbum()
  }
  searchStore.currentOffsetList[searchStore.active] ++
}

</script>
<style scoped lang="scss">
@import url('@/style/common.scss');
.input-field {
  :deep(.van-field__control) {
    border-bottom: 1px solid #a7a7a7;
  }
}
</style>
