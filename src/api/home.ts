import { BallType, HomepageType } from '@/types/homepage'
import { post } from './api'

const blockPage = (data: object, force = false): Promise<HomepageType.Root> => post(
  `${'/homepage/block/page' + '?timestamp='}${new Date().getTime()}`, data, force)
const homepageIcon = (force = false): Promise<BallType.Root> => post(`${'/homepage/dragon/ball' + '?timestamp='}${new Date().getTime()}`, {}, force)

export {
  blockPage,
  homepageIcon
}
