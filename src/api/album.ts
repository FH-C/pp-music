import { AlbumDynamicType, AlbumType } from '@/types/album'
import { post } from './api'

const getAlbum = (data: object): Promise<AlbumType.Root> => post(`${'/album' + '?timestamp='}${new Date().getTime()}`, data, true)

const getAlbumDynamic = (data: object): Promise<AlbumDynamicType.Root> => post(`${'/album/detail/dynamic' + '?timestamp='}${new Date().getTime()}`, data, true)

export {
  getAlbum,
  getAlbumDynamic
}
