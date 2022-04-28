import { CloudType } from '@/types/cloud'
import { post } from './api'

const getCloudData = (data: object, force = false): Promise<CloudType.Root> => post(`${'/user/cloud' + '?timestamp='}${new Date().getTime()}`, data, force)
const getCloudDataDetail = (data: object, force = false): Promise<CloudType.Root> => post(
  `${'/user/cloud/detail' + '?timestamp='}${new Date().getTime()}`, data, force)
const deleteCloudSongs = (data: object, force = false) => post(`${'/user/cloud/del' + '?timestamp='}${new Date().getTime()}`, data, force)
const uploadCloudSong = (force = false) => post(`${'/cloud' + '?timestamp='}${new Date().getTime()}`, {}, force)

export {
  getCloudData,
  getCloudDataDetail,
  deleteCloudSongs,
  uploadCloudSong
}
