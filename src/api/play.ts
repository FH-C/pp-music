import { LyricsType, SongDetailType, SongUrlType } from '@/types/song'
import { post } from './api'

const getSongDetail = (data: object, force = false): Promise<SongDetailType> => post(
  '/song/detail' + '?timestamp=' + new Date().getTime(), data, force)

const getSongURL = (data: object): Promise<SongUrlType> => post('/song/url' + '?timestamp=' + new Date().getTime(), data, true)

const getLyrics = (data: object): Promise<LyricsType> => post('/lyric' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getSongDetail,
  getSongURL,
  getLyrics,
}
