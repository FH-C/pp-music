<template>
  <div>
    <van-field
      v-model="realkeyword"
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
    <div v-if="showSearchResult">
      <van-tabs
        v-model:active="active"
        swipeable
        animated
      >
        <van-tab
          v-for="(item, index) in tabs"
          :key="item"
          :title="item"
        >
          <SearchResultSongVue @load="search"></SearchResultSongVue>
        </van-tab>
      </van-tabs>
    </div>
    <div v-else-if="!realkeyword">
      <SearchCardVue
        :keyword-list="keywordList"
        @search="search"
      ></SearchCardVue>
    </div>
    <div v-else>
      <van-cell
        v-for="suggest in searchSuggestList"
        :key="suggest.keyword"
        icon="search"
        :value="suggest.keyword"
        @click="search(suggest.keyword)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NavBar, Field, Cell, Tab, Tabs } from 'vant'
import { onMounted, ref } from 'vue'
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

const realkeyword = ref('')
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
  searchSuggestList.value = res.value.result.allMatch
}
const search = async function (keyword?: string) {
  let res = undefined
  if (keyword) {
    realkeyword.value = keyword
    searchStore.currentOffset = 0
  } else {
    if (!realkeyword.value) {
      realkeyword.value = showKeyword.value
      searchStore.currentOffset = 0
    }
  }
  searchStore.loading = true
  res = await cloudsearch({
    keywords: realkeyword.value,
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
