import { PlaylistDetailType } from '@/types/playlist'
import { post } from '@/core/request'

const getPlaylistDetail = (data: object): Promise<PlaylistDetailType.Root> => post(`${'/playlist/detail?timestamp='}${new Date().getTime()}`, data)

export {
  getPlaylistDetail,
}
