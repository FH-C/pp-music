import { post } from './api'

const blockPage = (data: object, force = false) => post(
  '/homepage/block/page' + '?timestamp=' + new Date().getTime(), data, force)
const homepageIcon = (force = false) => post('/homepage/dragon/ball' + '?timestamp=' + new Date().getTime(), {}, force)

export {
  blockPage,
  homepageIcon,
}
