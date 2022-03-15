import { post } from './api'

const cloudsearch = (data: object, force = false) => post(
  '/cloudsearch' + '?timestamp=' + new Date().getTime(), data, force)
const searchDefault = (force = false) => post('/search/default' + '?timestamp=' + new Date().getTime(), {}, force)
const searchHot = (force = false) => post('/search/hot' + '?timestamp=' + new Date().getTime(), {}, force)
const searchHotDetail = (force = false) => post('/search/hot/detail' + '?timestamp=' + new Date().getTime(), {}, force)
const searchSuggest = (data: object, force = false) => post(
  '/search/suggest' + '?timestamp=' + new Date().getTime(), data, force)
const searchMultimatch = (data: object, force = false) => post(
  '/search/multimatch' + '?timestamp=' + new Date().getTime(), data, force)

export {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
}
