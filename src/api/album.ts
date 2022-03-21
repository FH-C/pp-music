import { post } from './api'

const getAlbum = (data: object) => post(
  '/album' + '?timestamp=' + new Date().getTime(), data, true)

const getAlbumDynamic = (data: object) => post(
  '/album/detail/dynamic' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getAlbum,
  getAlbumDynamic,
}
