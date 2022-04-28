import { AlbumDynamicType, AlbumType } from '@/types/album'
import { post } from './api'

const getAlbum = (data: object): Promise<AlbumType> => post(
  '/album' + '?timestamp=' + new Date().getTime(), data, true)

const getAlbumDynamic = (data: object): Promise<AlbumDynamicType> => post(
  '/album/detail/dynamic' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getAlbum,
  getAlbumDynamic,
}
