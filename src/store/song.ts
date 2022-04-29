import { defineStore } from 'pinia'
import { LyricType, SongDetailType } from '@/types/song'

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
      playingSongDetail: {} as SongDetailType.Song,
      playingSongList: [] as SongDetailType.Song[],
      lyrics: [] as LyricType.Lyrics[],
      playerRef: null as any,
      showPopup: false
    }
  },
  actions: {

  }
})
