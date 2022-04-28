import { PlaylistDetailType } from '@/types/playlist'
import { post } from './api'

const getPlaylistDetail = (data: object): Promise<PlaylistDetailType> => post(
  '/playlist/detail' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getPlaylistDetail,
}
