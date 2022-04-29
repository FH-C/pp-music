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
          :disabled="[1, 2, 3, 4, 5, 6].indexOf(index) === -1"
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
  searchMultimatch
} from '@/api/search'
import { useRoute } from 'vue-router'
import { types, tabs, components } from '@/utils/search'
import { updateSearchHistoryLocalStorage } from '@/utils/localStorage'
import router from '@/router'
import { CloudSearchType, SearchHotDetailType, SearchResultType } from '@/types/search'
import { CloudType } from '@/types/cloud'

const route = useRoute()
const showKeyword = ref('')
const searchHotList = ref([])
const searchHotDetailList = ref([] as SearchHotDetailType.Daum[])
const keywordList = ref([] as SearchHotDetailType.Daum[])
const searchSuggestList = ref([])
const showSearchResult = ref(false)
const searchStore = useSearchStore()
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
  searchStore.searchKeyword = route.query.key as string
  // await search()
})
onUnmounted(() => {
  searchStore.searchResultSong = [] as unknown as SearchResultType.SearchResultSongType.Root
  searchStore.searchResultSinger = [] as unknown as SearchResultType.SearchResultArtistType.Root
  searchStore.searchResultAlbum = [] as unknown as SearchResultType.SearchResultAlbumType.Root
  searchStore.searchResultLyrics = [] as unknown as SearchResultType.SearchResultLyricsType.Root
  searchStore.searchResultPlaylist = [] as unknown as SearchResultType.SearchResultPlaylistType.Root
  searchStore.searchResultVideo = [] as unknown as SearchResultType.SearchResultVideoType.Root
})
watch(() => searchStore.active, async () => {
  await search()
})
const onClickField = async function () {
  await onUpdate(searchStore.searchKeyword)
  router.replace({
    path: '/search'
  })
}
const getDefaultKey = async function() {
  const res = await searchDefault(true)
  showKeyword.value = res.data.showKeyword
}
const getSearchHot = async function() {
  const res = await searchHot(true)
  searchHotList.value = res.result.hots
}
const getsearchHotDetail = async function() {
  const res = await searchHotDetail(true)
  searchHotDetailList.value = res.data
  keywordList.value = searchHotDetailList.value
}

const onUpdate = async function (value: string) {
  if (!value) {
    return
  }
  const res = await searchSuggest({
    keywords: value,
    type: 'mobile'
  }, true)
  searchStore.searchSuggestList = res.result.allMatch
}
onUnmounted(() => {
})
const searchSong = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultSongType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultSong = res.result
  } else {
    searchStore.searchResultSong.songs = searchStore.searchResultSong.songs.concat(res.result.songs)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.songCount) {
    searchStore.finished = true
  }
}

const searchPlaylist = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultPlaylistType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultPlaylist = res.result
  } else {
    searchStore.searchResultPlaylist.playlists = searchStore.searchResultPlaylist.playlists.concat(
      res.result.playlists)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.playlistCount) {
    searchStore.finished = true
  }
}
const searchAlbum = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultAlbumType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultAlbum = res.result
  } else {
    searchStore.searchResultAlbum.albums = searchStore.searchResultAlbum.albums.concat(res.result.albums)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.albumCount) {
    searchStore.finished = true
  }
}
const searchSinger = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultArtistType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultSinger = res.result
  } else {
    searchStore.searchResultSinger.artists = searchStore.searchResultSinger.artists.concat(res.result.artists)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.artistCount) {
    searchStore.finished = true
  }
}
const searchLyrics = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultLyricsType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultLyrics = res.result
  } else {
    searchStore.searchResultLyrics.songs = searchStore.searchResultLyrics.songs.concat(res.result.songs)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.songCount) {
    searchStore.finished = true
  }
}
const searchVideo = async function () {
  searchStore.loading = true
  const res: CloudSearchType.Root<SearchResultType.SearchResultVideoType.Root> = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: types[searchStore.active],
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffsetList[searchStore.active]
  }, true)
  if (searchStore.currentOffsetList[searchStore.active] === 0) {
    searchStore.searchResultVideo = res.result
  } else {
    searchStore.searchResultVideo.videos = searchStore.searchResultVideo.videos.concat(res.result.videos)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.result.videoCount) {
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
  } else if (searchStore.active === 5) {
    await searchLyrics()
  } else if (searchStore.active === 6) {
    await searchAlbum()
  }
  searchStore.currentOffsetList[searchStore.active]++
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
