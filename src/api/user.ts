import { post } from '@/core/request'

const followUser = (data: object) => post(`${'/follow?timestamp='}${new Date().getTime()}`, data)

export {
  followUser,
}
