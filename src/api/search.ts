import {
  CloudSearchType, SearchDefaultType, SearchHotDetailType, SearchSuggestType,
} from '@/types/search'
import { post } from '@/core/request'

const cloudsearch = (data: object): Promise<CloudSearchType.Root<any>> => post(`${'/cloudsearch?timestamp='}${new Date().getTime()}`, data)
const searchDefault = (): Promise<SearchDefaultType.Root> => post(`${'/search/default?timestamp='}${new Date().getTime()}`, {})
const searchHot = () => post(`${'/search/hot?timestamp='}${new Date().getTime()}`, {})
const searchHotDetail = (): Promise<SearchHotDetailType.Root> => post(`${'/search/hot/detail?timestamp='}${new Date().getTime()}`, {})
const searchSuggest = (data: object): Promise<SearchSuggestType.Root> => post(`${'/search/suggest?timestamp='}${new Date().getTime()}`, data)
const searchMultimatch = (data: object) => post(`${'/search/multimatch?timestamp='}${new Date().getTime()}`, data)

export {
  cloudsearch,
  searchDefault,
  searchHot,
  searchHotDetail,
  searchSuggest,
  searchMultimatch,
}
