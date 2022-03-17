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
          @click="onClickLeft"
        />
      </template>
    </van-field>
    <div>
      <van-tabs
        v-model:active="active"
        swipeable
        animated
      >
        <van-tab
          v-for="item in tabs"
          :key="item"
          :title="item"
        >
          <SearchResultSongVue @load="search"></SearchResultSongVue>
        </van-tab>
      </van-tabs>
    </div>
    <MiniPlayerVue style="z-index: 1000;"></MiniPlayerVue>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Field, Cell, Tab, Tabs } from 'vant'
import { onMounted, onUnmounted, ref } from 'vue'
import { onClickLeft } from '../../utils/router'
import SearchCardVue from '../../components/search/SearchCard.vue'
import SearchResultSongVue from '../../components/search/SearchResultSong.vue'
import MiniPlayerVue from '../../components/MiniPlayer.vue'
import { useSearchStore } from '../../store/search'
import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
} from '../../api/search'
import { useRoute } from 'vue-router'

const route = useRoute()
const showKeyword = ref('')
const searchHotList = ref([])
const searchHotDetailList = ref([])
const keywordList = ref([])
const searchSuggestList = ref([])
const showSearchResult = ref(false)
const active = ref(0)
const tabs = ['综合', '单曲', '歌单', '视频', '歌手', '播客', '歌词', '专辑', '声音', '话题', '用户']
const types = []
const searchStore = useSearchStore()
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
  searchStore.searchKeyword = route.query.key as string
})
const onClickField = async function () {
  await onUpdate(searchStore.searchKeyword)
  onClickLeft()
}
const getDefaultKey = async function() {
  const res = await searchDefault(true)
  showKeyword.value = res.value.data.showKeyword
}
const getSearchHot = async function() {
  const res = await searchHot(true)
  searchHotList.value = res.value.result.hots
  console.log(searchHotList.value)
}
const getsearchHotDetail = async function() {
  const res = await searchHotDetail(true)
  searchHotDetailList.value = res.value.data
  console.log(searchHotDetailList.value)
  keywordList.value = searchHotDetailList.value
}

const onUpdate = async function (value: string) {
  const res = await searchSuggest({
    keywords: value,
    type: 'mobile',
  }, true)
  searchStore.searchSuggestList = res.value.result.allMatch
}
onUnmounted (() => {
})
const search = async function (keyword?: string) {
  let res = undefined
  if (keyword) {
    searchStore.searchKeyword = keyword
    searchStore.currentOffset = 0
  } else {
    if (!searchStore.searchKeyword) {
      searchStore.searchKeyword = showKeyword.value
      searchStore.currentOffset = 0
    }
  }
  if (!searchStore.searchResult.songs) {
    searchStore.currentOffset = 0
  }
  searchStore.loading = true
  res = await cloudsearch({
    keywords: searchStore.searchKeyword,
    type: searchStore.searchType,
    limit: searchStore.currentLimit,
    offset: searchStore.currentOffset,
  }, true)
  if (searchStore.currentOffset === 0) {
    searchStore.searchResult = res.value.result
  } else {
    searchStore.searchResult.songs = searchStore.searchResult.songs.concat(res.value.result.songs)
  }
  searchStore.loading = false
  showSearchResult.value = true
  if (searchStore.currentLimit * (searchStore.currentOffset + 1) >= res.value.result.songCount) {
    searchStore.finished = true
  }
}

</script>
<style scoped lang="scss">
@import url('../../styles/common.scss');
.input-field {
  :deep(.van-field__control) {
    border-bottom: 1px solid #a7a7a7;
  }
}
</style>
