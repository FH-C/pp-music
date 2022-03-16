import { defineStore } from 'pinia'

export const useSongStore = defineStore('song', {
  state: () => {
    return { 
      showPlayer: false,
      playStatus: false,
      currentPlayTime: 0,
      playingId: 0,
      playingIndex: 0,
      playingType: 0,
      musicUrl: '',
      playingSongDetail: {},
      playingSongList: [],
      lyrics: {},
      playerRef: null,
      showPopup: false,
    }
  },
  actions: {
    
  },
})
