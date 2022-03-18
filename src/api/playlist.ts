import { post } from './api'

const getPlaylistDetail = (data: object) => post(
  '/playlist/detail' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getPlaylistDetail,
}
