import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', {
  state: () => {
    return { 
      searchKeyword: '',
      searchResult: {},
      searchSuggestList: [],
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
