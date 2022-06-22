import { BallType, HomepageType } from '@/types/homepage'
import { post } from '@/core/request'

const blockPage = (data: object): Promise<HomepageType.Root> => post(`${'/homepage/block/page?timestamp='}${new Date().getTime()}`, data)
const homepageIcon = (): Promise<BallType.Root> => post(`${'/homepage/dragon/ball?timestamp='}${new Date().getTime()}`, {})

export {
  blockPage,
  homepageIcon,
}
