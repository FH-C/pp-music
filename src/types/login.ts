export interface CaptchaSentType {
  code: number
  data: boolean
}

export interface LoginCellphoneType {
  loginType: number
  code: number
  account: Account
  token: string
  profile: Profile
  bindings: Binding[]
  cookie: string
}

export interface Account {
  id: number
  userName: string
  type: number
  status: number
  whitelistAuthority: number
  createTime: number
  salt: string
  tokenVersion: number
  ban: number
  baoyueVersion: number
  donateVersion: number
  vipType: number
  viptypeVersion: number
  anonimousUser: boolean
  uninitialized: boolean
}

export interface Profile {
  backgroundUrl: string
  detailDescription: string
  backgroundImgIdStr: string
  avatarImgIdStr: string
  userId: number
  userType: number
  accountStatus: number
  vipType: number
  gender: number
  avatarImgId: number
  nickname: string
  backgroundImgId: number
  birthday: number
  city: number
  avatarUrl: string
  defaultAvatar: boolean
  province: number
  expertTags: any
  experts: Experts
  mutual: boolean
  remarkName: any
  authStatus: number
  djStatus: number
  followed: boolean
  description: string
  signature: string
  authority: number
  avatarImgId_str: string
  followeds: number
  follows: number
  eventCount: number
  avatarDetail: any
  playlistCount: number
  playlistBeSubscribedCount: number
}

export interface Experts {}

export interface Binding {
  userId: number
  url: string
  expired: boolean
  bindingTime: number
  tokenJsonStr: string
  expiresIn: number
  refreshTime: number
  id: number
  type: number
}

export interface LoginStatusType {
  data: Data
}

export interface Data {
  code: number
  account: Account
  profile: Profile
}

export interface LogoutType {
  code: number
}
