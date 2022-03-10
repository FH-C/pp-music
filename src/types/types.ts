interface recommendedPlaylistsType {
  id: number,
  name: string,
  picUrl: string,
  playCount: number,
  userId: number,
  copywriter: string
}

interface recommendedSongsType {
  al: object,
  name: string,
  alia: Array<string>,
  ar: Array<string>
}

interface bannerListType {
  bannerId: string,
  pic: string,
  typeTitle: string,
  titleColor: string
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

export {
  recommendedPlaylistsType,
  recommendedSongsType,
  bannerListType,
  songListHomepageType,
  homepageiConType,
}
