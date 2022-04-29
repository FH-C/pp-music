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
              :videos="videoResult?.result?.videos"
              :albums="albumResult?.result?.albums"
              :playlists="playlistResult?.result?.playlists"
              :artists="artistResult?.result?.artists"
              :songs="songResult?.result?.songs"
              :lirics="liricsResult?.result?.songs"
              :loading="loading"
              :finished="finishedList[searchStore.active]"
              @load="search"
            ></component>
          </keep-alive>
        </van-tab>
      </van-tabs>
    </div>
    <div class="fixed-left-bottom">
      <MiniPlayerVue></MiniPlayerVue>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { onClickLeft } from '@/utils/router'
import { useSearchStore } from '@/store/search'
import { useRoute } from 'vue-router'
import { tabs, components } from '@/utils/search'
import router from '@/router'
import { SearchHotDetailType, SearchResultType } from '@/types/search'
import useSearch from '@/composables/useSearch'

const route = useRoute()
// const showKeyword = ref('')
// const keywordList = ref([] as SearchHotDetailType.Daum[])
const showSearchResult = ref(false)
const searchStore = useSearchStore()
const {
  showKeyword,
  keywordList,
  albumResult,
  songResult,
  playlistResult,
  liricsResult,
  artistResult,
  videoResult,
  loading,
  finishedList,
  search,
  onUpdate
} = useSearch(searchStore)
onMounted(async () => {
  searchStore.searchKeyword = route.query.key as string
})
onUnmounted(() => {
  searchStore.searchResultSong = [] as unknown as SearchResultType.SearchResultSongType.Root
  searchStore.searchResultSinger = [] as unknown as SearchResultType.SearchResultArtistType.Root
  searchStore.searchResultAlbum = [] as unknown as SearchResultType.SearchResultAlbumType.Root
  searchStore.searchResultLyrics = [] as unknown as SearchResultType.SearchResultLyricsType.Root
  searchStore.searchResultPlaylist = [] as unknown as SearchResultType.SearchResultPlaylistType.Root
  searchStore.searchResultVideo = [] as unknown as SearchResultType.SearchResultVideoType.Root
})

const onClickField = async function () {
  await onUpdate(searchStore.searchKeyword)
  router.replace({
    path: '/search'
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
</style>
