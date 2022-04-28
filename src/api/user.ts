import { post } from './api'

const followUser = (data: object) => post(`${'/follow' + '?timestamp='}${new Date().getTime()}`, data, true)

export {
  followUser
}
