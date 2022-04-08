<template>
  <div>
    <van-field
      v-model="searchStore.searchKeyword"
      clearable
      :placeholder="showKeyword"
      class="input-field"
      size="large"
      @update:model-value="onUpdate"
      @keydown.enter="search()"
    >
      <template #left-icon>
        <van-icon
          name="arrow-left"
          style="padding-right: 10px;"
          @click="onClickLeft"
        />
      </template>
    </van-field>
    <div
      v-if="!searchStore.searchKeyword && searchHistory.length !== -1"
      class="history padding-column-2"
    >
      <span class="bold history-text">历史</span>
      <span class="scroll-x tags">
        <van-tag
          v-for="item in (searchHistory as any)"
          :key="item.text"
          round
          type="primary"
          color="#f3f3f3"
          text-color="#383838"
          size="large"
          class="tag-item"
          @click="search(item.text)"
        >{{ item.text }}</van-tag>
      </span>
      <span
        class="clear"
        @click="clearSearchHistoryLocalStorage"
      ><van-icon name="delete-o" /></span>
    </div>
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
import { onClickLeft } from '@/utils/router'
import SearchCardVue from 'components/search/SearchCard.vue'
import SearchResultSongVue from 'components/search/SearchResultSong.vue'
import { useSearchStore } from '@/store/search'
import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
} from '@/api/search'
import { useRouter } from 'vue-router'
import { types, tabs } from '@/utils/search'
import { getSearchHistoryLocalStorage, clearSearchHistoryLocalStorage } from '@/utils/localStorage'

const router = useRouter()
const showKeyword = ref('')
const searchHotList = ref([])
const searchHotDetailList = ref([])
const keywordList = ref([])
const showSearchResult = ref(false)
const searchStore = useSearchStore()
const searchHistory = ref([])
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
  searchHistory.value = getSearchHistoryLocalStorage()
})
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
  if (keyword) {
    searchStore.searchKeyword = keyword
    searchStore.currentOffsetList[searchStore.active] = 0
  } else {
    if (!searchStore.searchKeyword) {
      searchStore.searchKeyword = showKeyword.value
      searchStore.currentOffsetList[searchStore.active] = 0
    }
  }
  router.push({
    path: 'search-result',
    query: {
      key: searchStore.searchKeyword,
    },
  })
}

</script>
<style scoped lang="scss">
@import url('@/style/common.scss');
.input-field {
  :deep(.van-field__control) {
    border-bottom: 1px solid #a7a7a7;
  }
}
.history {
  text-align: left;
  .history-text {
    box-sizing: border-box;
    width: 15%;
    padding-left: 4%;
    display: inline-block;
    position: relative;
    bottom: 12px;
  }

  .tags {
    display: inline-block;
    box-sizing: border-box;
    width: 75%;

    .tag-item {
      margin-right: 10px;
    }
  }

  .clear {
    box-sizing: border-box;
    display: inline-block;
    padding-left: 2%;
    padding-right: 4%;
    width: 10%;
    position: relative;
    bottom: 12px;
  }
}
</style>
