import { post } from './api'

const recommendResource = (force = false) => post(`${'/recommend/resource' + '?timestamp='}${new Date().getTime()}`, {}, force)
const recommendSongs = (force = false) => post(`${'/recommend/songs' + '?timestamp='}${new Date().getTime()}`, {}, force)
const recommendVideo = (data: object, force = false) => post(`${'/video/timeline/recommend' + '?timestamp='}${new Date().getTime()}`, data, force)
const personalized = (data: object, force = false) => post(`${'/personalized' + '?timestamp='}${new Date().getTime()}`, data, force)
const personalizedNewsong = (data: object, force = false) => post(`${'/personalized/newsong' + '?timestamp='}${new Date().getTime()}`, data, force)
const personalizedMV = (force = false) => post(`${'/personalized/mv' + '?timestamp='}${new Date().getTime()}`, {}, force)

export {
  recommendResource,
  personalized,
  recommendSongs,
  personalizedNewsong,
  recommendVideo,
  personalizedMV
}
