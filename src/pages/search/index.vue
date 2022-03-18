<template>
  <div>
    <van-field
      v-model="searchStore.searchKeyword"
      clearable
      :placeholder="showKeyword"
      class="input-field"
      size="large"
      @update:model-value="onUpdate"
    >
      <template #left-icon>
        <van-icon
          name="arrow-left"
          style="padding-right: 10px;"
          @click="onClickLeft"
        />
      </template>
    </van-field>
    <div v-if="!searchStore.searchKeyword">
      <SearchCardVue
        :keyword-list="keywordList"
        @search="search"
      ></SearchCardVue>
    </div>
    <div v-else>
      <van-cell
        v-for="suggest in searchStore.searchSuggestList"
        :key="suggest.keyword"
        icon="search"
        :value="suggest.keyword"
        @click="search(suggest.keyword)"
      />
    </div>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Field, Cell, Tab, Tabs } from 'vant'
import { onMounted, onUnmounted, ref } from 'vue'
import { onClickLeft } from '../../utils/router'
import SearchCardVue from '../../components/search/SearchCard.vue'
import SearchResultSongVue from '../../components/search/SearchResultSong.vue'
import { useSearchStore } from '../../store/search'
import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
} from '../../api/search'
import { useRouter } from 'vue-router'
import { types, tabs } from '../../utils/search'

const router = useRouter()
const showKeyword = ref('')
const searchHotList = ref([])
const searchHotDetailList = ref([])
const keywordList = ref([])
const showSearchResult = ref(false)
const searchStore = useSearchStore()
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
})
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
  searchStore.searchKeyword = ''
  searchStore.searchSuggestList = []
})
const search = async function (keyword?: string) {
  let res = undefined
  if (keyword) {
    searchStore.searchKeyword = keyword
    searchStore.currentOffsetList[searchStore.active] = 0
  } else {
    if (!searchStore.searchKeyword) {
      searchStore.searchKeyword = showKeyword.value
      searchStore.currentOffsetList[searchStore.active] = 0
    }
  }
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
  // showSearchResult.value = true
  router.push({
    path: 'search-result',
    query: {
      key: searchStore.searchKeyword,
    },
  })
  if (searchStore.currentLimit * (
    searchStore.currentOffsetList[searchStore.active] + 1) >= res.value.result.songCount) {
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
