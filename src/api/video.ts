import { post } from '@/core/request'

const mlogToVideo = (data: object) => post(`${'/mlog/to/video?timestamp='}${new Date().getTime()}`, data)

const getVideoDetail = (data: object) => post(`${'/video/detail?timestamp='}${new Date().getTime()}`, data)

const getVideoUrl = (data: object) => post(`${'/video/url?timestamp='}${new Date().getTime()}`, data)

const getMVDetail = (data: object) => post(`${'/mv/detail?timestamp='}${new Date().getTime()}`, data)

const getMVUrl = (data: object) => post(`${'/mv/url?timestamp='}${new Date().getTime()}`, data)

const getRelatedVideo = (data: object) => post(`${'/related/allvideo?timestamp='}${new Date().getTime()}`, data)

export {
  mlogToVideo,
  getVideoDetail,
  getVideoUrl,
  getMVDetail,
  getMVUrl,
  getRelatedVideo,
}
