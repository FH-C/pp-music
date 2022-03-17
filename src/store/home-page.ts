import { defineStore } from 'pinia'

export const useSongStore = defineStore('home-page', {
  state: () => {
    return { 
      showPlayer: false,
      playStatus: false,
      currentPlayTime: 0,
      playingId: 0,
      playingSongDetail: {} as any,
      songList: [] as any,
      lyrics: {} as any,
    }
  },
  actions: {
    
  },
})
