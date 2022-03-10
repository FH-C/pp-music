import { post } from './api'

const blockPage = (data: object) => post('/homepage/block/page' + '?timestamp=' + new Date().getTime(), data)
const homepageIcon = () => post('/homepage/dragon/ball' + '?timestamp=' + new Date().getTime(), {})

export {
  blockPage,
  homepageIcon,
}
