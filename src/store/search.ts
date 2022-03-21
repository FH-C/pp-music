import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return { 
      searchKeyword: '',
      searchResultSong: {} as any,
      searchResultPlaylist: {} as any,
      searchResultAlbum: {} as any,
      searchSuggestList: [] as any,
      currentOffsetList: Array(9).fill(0),
      currentLimit: 30,
      loading: false,
      finished: false,
      active: 1,
    }
  },
  actions: {
    
  },
})
