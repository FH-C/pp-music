import _ from 'lodash'
const getPlayingLocalStorage = function () {
  return localStorage.getItem('playing')
}

const updateSearchHistoryLocalStorage = function (searchText: string) {
  const searchHistory = localStorage.getItem('searchHistory')
  const timestamp = new Date().getTime()
  if (searchHistory) {
    const searchHistoryArr = JSON.parse(searchHistory)
    if (_.findIndex(searchHistoryArr, ['text', searchText]) === -1) {
      searchHistoryArr.unshift({
        text: searchText,
        timestamp,
      })
      if (searchHistoryArr.length > 10) {
        searchHistoryArr.pop()
      }
      localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArr))
    } else {
      const index = _.findIndex(searchHistoryArr, ['text', searchText])
      _.pullAt(searchHistoryArr, index)
      searchHistoryArr.unshift({
        text: searchText,
        timestamp,
      })
      localStorage.setItem('searchHistory', JSON.stringify(searchHistoryArr))
    }
  } else {
    localStorage.setItem('searchHistory', JSON.stringify([{
      text: searchText,
      timestamp,
    }]))
  }
}

const getSearchHistoryLocalStorage = function () {
  return JSON.parse(localStorage.getItem('searchHistory') || '[]')
}

const clearSearchHistoryLocalStorage = function () {
  localStorage.removeItem('searchHistory')
}

export {
  getPlayingLocalStorage,
  updateSearchHistoryLocalStorage,
  getSearchHistoryLocalStorage,
  clearSearchHistoryLocalStorage,
}
