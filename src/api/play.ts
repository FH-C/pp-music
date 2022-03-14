import { post } from './api'

const getSongDetail = (data: object) => post('/song/detail' + '?timestamp=' + new Date().getTime(), data)

export {
  getSongDetail,
}
