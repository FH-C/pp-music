import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return { 
      searchKeyword: '',
      searchResult: {} as any,
      searchSuggestList: [] as any,
      searchType: 1,
      currentOffset: 0,
      currentLimit: 30,
      loading: false,
      finished: false,
    }
  },
  actions: {
    
  },
})
