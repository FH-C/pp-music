import { post } from './api'

const subscribeArtist = (data: object) => post(
  '/artist/sub' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistDetail = (data: object) => post(
  '/artist/detail' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistDesc = (data: object) => post(
  '/artist/desc' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistFans = (data: object) => post(
  '/artist/fans' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistFollowCount = (data: object) => post(
  '/artist/follow/count' + '?timestamp=' + new Date().getTime(), data, true)

    
const getSimilarArtists = (data: object) => post(
  '/simi/artist' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistHotSongs = (data: object) => post(
  '/artists' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistAlbum = (data: object) => post(
  '/artist/album' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistSongs = (data: object) => post(
  '/artist/songs' + '?timestamp=' + new Date().getTime(), data, true)

const getArtistVideos = (data: object) => post(
  '/artist/video' + '?timestamp=' + new Date().getTime(), data, true)
const getArtistMV = (data: object) => post(
  '/artist/mv' + '?timestamp=' + new Date().getTime(), data, true)
    
export {
  subscribeArtist,
  getArtistDetail,
  getArtistDesc,
  getArtistFans,
  getArtistFollowCount,
  getSimilarArtists,
  getArtistHotSongs,
  getArtistAlbum,
  getArtistSongs,
  getArtistVideos,
  getArtistMV,
}
