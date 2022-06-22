import { CloudType } from '@/types/cloud'
import { post } from '@/core/request'

const getCloudData = (data: object): Promise<CloudType.Root> => post(`${'/user/cloud?timestamp='}${new Date().getTime()}`, data)
const getCloudDataDetail = (data: object): Promise<CloudType.Root> => post(`${'/user/cloud/detail?timestamp='}${new Date().getTime()}`, data)
const deleteCloudSongs = (data: object) => post(`${'/user/cloud/del?timestamp='}${new Date().getTime()}`, data)
const uploadCloudSong = () => post(`${'/cloud?timestamp='}${new Date().getTime()}`, {})

export {
  getCloudData,
  getCloudDataDetail,
  deleteCloudSongs,
  uploadCloudSong,
}
