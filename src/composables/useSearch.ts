import {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch
} from '@/api/search'
import { CloudSearchType, SearchResultType, SearchHotDetailType } from '@/types/search'
import { types } from '@/utils/search'
import { onMounted, ref, watch } from 'vue'

export default function useSearch(searchInfo: any) {
  const showKeyword = ref('')
  const currentOffsetList = Array(9).fill(0)
  const currentLimit = 30
  const loading = ref(false)
  const finishedList = Array(9).fill(false)
  const keywordList = ref([] as SearchHotDetailType.Daum[])
  const songResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultSongType.Root>)
  const playlistResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultPlaylistType.Root>)
  const artistResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultArtistType.Root>)
  const albumResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultAlbumType.Root>)
  const liricsResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultLyricsType.Root>)
  const videoResult = ref([] as unknown as CloudSearchType.Root<SearchResultType.SearchResultVideoType.Root>)
  const searchResult = [songResult, songResult, playlistResult, videoResult, artistResult, liricsResult, albumResult, songResult, songResult]
  const search = async function () {
    loading.value = true
    const res = await cloudsearch({
      keywords: searchInfo.searchKeyword,
      type: types[searchInfo.active],
      limit: currentLimit,
      offset: currentOffsetList[searchInfo.active]
    }, true)
    searchResult[searchInfo.active].value = res
    currentOffsetList[searchInfo.active]++
    for (const key of Object.keys(searchResult[searchInfo.active].value.result)) {
      if (key.indexOf('Count') !== -1) {
        if (currentLimit * (currentOffsetList[searchInfo.active] + 1) >= (searchResult[searchInfo.active].value.result as any)[key]) {
          finishedList[searchInfo.active] = true
        }
      }
    }
    if (currentOffsetList[searchInfo.active] !== 0) {
      Object.keys(searchResult[searchInfo.active].value.result).map((key) => {
        if (key.indexOf('QcReminder') === -1 && key.indexOf('Count') === -1) {
          searchResult[searchInfo.active] = (searchResult[searchInfo.active].value.result as any)[key]
        }
      })
    }
    loading.value = false
  }

  const getDefaultKey = async function() {
    const res = await searchDefault(true)
    showKeyword.value = res.data.showKeyword
  }

  const getSearchHotDetail = async function() {
    const res = await searchHotDetail(true)
    keywordList.value = res.data
  }

  watch(searchInfo.searchKeyword, search)
  watch(searchInfo.active, search)

  watch(loading, () => {
    console.log('loading', loading.value)
  })

  onMounted(getDefaultKey)
  onMounted(getSearchHotDetail)

  return {
    showKeyword,
    keywordList,
    albumResult,
    songResult,
    playlistResult,
    liricsResult,
    artistResult,
    videoResult,
    currentOffsetList,
    loading,
    finishedList,
    search,
    getDefaultKey,
    getSearchHotDetail
  }
}
