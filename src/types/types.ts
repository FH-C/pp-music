interface recommendedPlaylistsType {
  id: number,
  name: string,
  picUrl: string,
  playCount: number,
  userId: number,
  copywriter: string
}

interface recommendedSongsType {
  id: number,
  al: object,
  name: string,
  alia: Array<string>,
  ar: Array<string>
}

interface bannerListType {
  bannerId: string,
  pic: string,
  typeTitle: string,
  titleColor: string,
  song: any,
  url: string,
  targetType: number,
  targetId: number
}

interface songListHomepageType {
  blockCode: string,
  canClose: false
  creatives: Array<object>,
  dislikeShowType: number,
  showType: string,
  uiElement: object
}

interface homepageiConType {
  id: number,
  name: string,
  iconUrl: string,
  url: string,
  skinSupport: boolean,
  homepageMode: string
}

interface songDetailType {
  id: number
}

interface lyricsType {
  time: number,
  content: string
}

export {
  recommendedPlaylistsType,
  recommendedSongsType,
  bannerListType,
  songListHomepageType,
  homepageiConType,
  lyricsType
}
