import { post } from './api'

const getCloudData = (data: object, force = false) => post(
  '/user/cloud' + '?timestamp=' + new Date().getTime(), data, force)
const getCloudDataDetail = (data: object, force = false) => post(
  '/user/cloud/detail' + '?timestamp=' + new Date().getTime(), data, force)
const deleteCloudSongs = (data: object, force = false) => post(
  '/login/cellphone' + '?timestamp=' + new Date().getTime(), data, force)
const uploadCloudSong = (force = false) => post('/login/status' + '?timestamp=' + new Date().getTime(), {}, force)

export {
  getCloudData,
  getCloudDataDetail,
  deleteCloudSongs,
  uploadCloudSong,
}
