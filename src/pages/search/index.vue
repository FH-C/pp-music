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
    <div v-if="!realkeyword">
      <SearchCardVue :keyword-list="keywordList"></SearchCardVue>
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
import { NavBar, Field, Cell } from 'vant'
import { onMounted, ref } from 'vue'
import { onClickLeft } from '../../utils/router'
import SearchCardVue from '../../components/SearchCard.vue'
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
onMounted(async () => {
  getDefaultKey()
  // getSearchHot()
  getsearchHotDetail()
})
const getDefaultKey = async function() {
  const res = await searchDefault()
  showKeyword.value = res.data.data.showKeyword
}
const getSearchHot = async function() {
  const res = await searchHot()
  searchHotList.value = res.data.result.hots
  console.log(searchHotList.value)
}
const getsearchHotDetail = async function() {
  const res = await searchHotDetail()
  searchHotDetailList.value = res.data.data
  console.log(searchHotDetailList.value)
  keywordList.value = searchHotDetailList.value
}

const onUpdate = async function (value: string) {
  const res = await searchSuggest({
    keywords: value,
    type: 'mobile',
  })
  searchSuggestList.value = res.data.result.allMatch
}
const search = async function (keyword?: string) {
  console.log('keyword', keyword)
  if (keyword) {
    const res = await cloudsearch({
      keywords: keyword,
      type: 1,
    })
    console.log('search', res)
    return
  }
  if (!realkeyword.value) {
    realkeyword.value = showKeyword.value
  }
  const res = await cloudsearch({
    keywords: realkeyword.value,
    type: 1,
  })
  console.log('search', res)
}
</script>
<style scoped lang="scss">
.input-field {
  :deep(.van-field__control) {
    border-bottom: 1px solid #a7a7a7;
  }
}
</style>
