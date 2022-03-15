import { post } from './api'

const getSongDetail = (data: object, force = false) => post(
  '/song/detail' + '?timestamp=' + new Date().getTime(), data, force)

export {
  getSongDetail,
}
