import {
  ArtistDescType, ArtistDetailType, ArtistFollowType, ArtistHotAlbumsType, ArtistHotSongsType,
  ArtistSongsType, ArtistVideosType, SimilarArtistsType, SubArtistType
} from '@/types/artist'
import { post } from './api'

const subscribeArtist = (data: object): Promise<SubArtistType.Root> => post(`${'/artist/sub' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistDetail = (data: object): Promise<ArtistDetailType.Root> => post(`${'/artist/detail' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistDesc = (data: object): Promise<ArtistDescType.Root> => post(`${'/artist/desc' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistFans = (data: object) => post(`${'/artist/fans' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistFollowCount = (data: object): Promise<ArtistFollowType.Root> => post(
  `${'/artist/follow/count' + '?timestamp='}${new Date().getTime()}`, data, true)

const getSimilarArtists = (data: object): Promise<SimilarArtistsType.Root> => post(`${'/simi/artist' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistHotSongs = (data: object): Promise<ArtistHotSongsType.Root> => post(`${'/artists' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistAlbum = (data: object): Promise<ArtistHotAlbumsType.Root> => post(`${'/artist/album' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistSongs = (data: object): Promise<ArtistSongsType.Root> => post(`${'/artist/songs' + '?timestamp='}${new Date().getTime()}`, data, true)

const getArtistVideos = (data: object): Promise<ArtistVideosType.Root> => post(`${'/artist/video' + '?timestamp='}${new Date().getTime()}`, data, true)
const getArtistMV = (data: object) => post(`${'/artist/mv' + '?timestamp='}${new Date().getTime()}`, data, true)

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
  getArtistMV
}
