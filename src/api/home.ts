import { post } from './api'

const blockPage = (data: object) => post('/homepage/block/page' + '?timestamp=' + new Date().getTime(), data)

export {
  blockPage,
}
