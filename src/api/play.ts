import { LyricType, SongDetailType, SongUrlType } from '@/types/song'
import { post } from '@/core/request'

const getSongDetail = (data: object): Promise<SongDetailType.Root> => post(`${'/song/detail?timestamp='}${new Date().getTime()}`, data)

const getSongURL = (data: object): Promise<SongUrlType.Root> => post(`${'/song/url?timestamp='}${new Date().getTime()}`, data)

const getLyrics = (data: object): Promise<LyricType.Root> => post(`${'/lyric?timestamp='}${new Date().getTime()}`, data)

export {
  getSongDetail,
  getSongURL,
  getLyrics,
}
