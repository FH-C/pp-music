import { post } from '@/core/request'

const recommendResource = () => post(`${'/recommend/resource?timestamp='}${new Date().getTime()}`, {})
const recommendSongs = () => post(`${'/recommend/songs?timestamp='}${new Date().getTime()}`, {})
const recommendVideo = (data: object) => post(`${'/video/timeline/recommend?timestamp='}${new Date().getTime()}`, data)
const personalized = (data: object) => post(`${'/personalized?timestamp='}${new Date().getTime()}`, data)
const personalizedNewsong = (data: object) => post(`${'/personalized/newsong?timestamp='}${new Date().getTime()}`, data)
const personalizedMV = () => post(`${'/personalized/mv?timestamp='}${new Date().getTime()}`, {})

export {
  recommendResource,
  personalized,
  recommendSongs,
  personalizedNewsong,
  recommendVideo,
  personalizedMV,
}
