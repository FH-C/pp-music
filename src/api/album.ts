import { AlbumDynamicType, AlbumType } from '@/types/album'
import { post } from '@/core/request'

const getAlbum = (data: object): Promise<AlbumType.Root> => post(`${'/album?timestamp='}${new Date().getTime()}`, data)

const getAlbumDynamic = (data: object): Promise<AlbumDynamicType.Root> => post(`${'/album/detail/dynamic?timestamp='}${new Date().getTime()}`, data)

export {
  getAlbum,
  getAlbumDynamic,
}
