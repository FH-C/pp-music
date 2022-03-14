import { post } from './api'

const cloudsearch = (data: object) => post('/cloudsearch' + '?timestamp=' + new Date().getTime(), data)
const searchDefault = () => post('/search/default' + '?timestamp=' + new Date().getTime(), {})
const searchHot = () => post('/search/hot' + '?timestamp=' + new Date().getTime(), {})
const searchHotDetail = () => post('/search/hot/detail' + '?timestamp=' + new Date().getTime(), {})
const searchSuggest = (data: object) => post('/search/suggest' + '?timestamp=' + new Date().getTime(), data)
const searchMultimatch = (data: object) => post('/search/multimatch' + '?timestamp=' + new Date().getTime(), data)

export {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
}
