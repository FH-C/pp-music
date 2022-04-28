import { LyricType, SongDetailType, SongUrlType } from '@/types/song'
import { post } from './api'

const getSongDetail = (data: object, force = false): Promise<SongDetailType.Root> => post(
  `${'/song/detail' + '?timestamp='}${new Date().getTime()}`, data, force)

const getSongURL = (data: object): Promise<SongUrlType.Root> => post(`${'/song/url' + '?timestamp='}${new Date().getTime()}`, data, true)

const getLyrics = (data: object): Promise<LyricType.Root> => post(`${'/lyric' + '?timestamp='}${new Date().getTime()}`, data, true)

export {
  getSongDetail,
  getSongURL,
  getLyrics
}
