import { post } from './api'

const mlogToVideo = (data: object) => post(
  '/mlog/to/video' + '?timestamp=' + new Date().getTime(), data, true)

const getVideoDetail = (data: object) => post(
  '/video/detail' + '?timestamp=' + new Date().getTime(), data, true)
    
const getVideoUrl = (data: object) => post(
  '/video/url' + '?timestamp=' + new Date().getTime(), data, true)

const getMVDetail = (data: object) => post(
  '/mv/detail' + '?timestamp=' + new Date().getTime(), data, true)
      
const getMVUrl = (data: object) => post(
  '/mv/url' + '?timestamp=' + new Date().getTime(), data, true)

const getRelatedVideo = (data: object) => post(
  '/related/allvideo' + '?timestamp=' + new Date().getTime(), data, true)

export {
  mlogToVideo,
  getVideoDetail,
  getVideoUrl,
  getMVDetail,
  getMVUrl,
  getRelatedVideo,
}
