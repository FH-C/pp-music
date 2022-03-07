import { post } from './api'

const recommendResource = () => post('/recommend/resource' + '?timestamp=' + new Date().getTime(), {})
const personalized = (data: object) => post('/personalized' + '?timestamp=' + new Date().getTime(), data)

export {
  recommendResource,
  personalized,
}
