import { defineStore } from 'pinia'
import { SearchResultType, SearchSuggestType } from '@/types/search'

export const useSearchStore = defineStore('search', {
  state: () => {
    return {
      searchKeyword: '',
      searchResultSong: {} as SearchResultType.SearchResultSongType.Root,
      searchResultPlaylist: {} as SearchResultType.SearchResultPlaylistType.Root,
      searchResultAlbum: {} as SearchResultType.SearchResultAlbumType.Root,
      searchResultSinger: {} as SearchResultType.SearchResultArtistType.Root,
      searchResultLyrics: {} as SearchResultType.SearchResultLyricsType.Root,
      searchResultVideo: {} as SearchResultType.SearchResultVideoType.Root,
      searchSuggestList: [] as SearchSuggestType.AllMatch[],
      currentOffsetList: Array(9).fill(0),
      currentLimit: 30,
      loading: false,
      finished: false,
      active: 1
    }
  },
  actions: {

  }
})
