import { post } from './api'

const getSongDetail = (data: object, force = false) => post(
  '/song/detail' + '?timestamp=' + new Date().getTime(), data, force)

const getSongURL = (data: object) => post('/song/url' + '?timestamp=' + new Date().getTime(), data, true)

export {
  getSongDetail,
  getSongURL,
}
