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
      musicUrlList: [''],
      misicPicList: [''],
      playingSongDetail: {} as any,
      playingSongList: [] as any,
      lyrics: [] as any,
      playerRef: null as any,
      showPopup: false
    }
  },
  actions: {

  }
})
