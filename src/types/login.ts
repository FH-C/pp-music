export namespace CaptchaSentType {
  export interface Root {
    code: number
    data: boolean
  }
}

export namespace LoginCellphoneType {
  export interface Root {
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

  export interface Experts { }

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
}

export namespace LoginStatusType {
  export interface Root {
    data: Data
  }

  export interface Data {
    code: number
    account: Account
    profile: Profile
  }

  export interface Account {
    id: number
    userName: string
    type: number
    status: number
    whitelistAuthority: number
    createTime: number
    tokenVersion: number
    ban: number
    baoyueVersion: number
    donateVersion: number
    vipType: number
    anonimousUser: boolean
    paidFee: boolean
  }

  export interface Profile {
    userId: number
    userType: number
    nickname: string
    avatarImgId: number
    avatarUrl: string
    backgroundImgId: number
    backgroundUrl: string
    signature: string
    createTime: number
    userName: string
    accountType: number
    shortUserName: string
    birthday: number
    authority: number
    gender: number
    accountStatus: number
    province: number
    city: number
    authStatus: number
    description: any
    detailDescription: any
    defaultAvatar: boolean
    expertTags: any
    experts: any
    djStatus: number
    locationStatus: number
    vipType: number
    followed: boolean
    mutual: boolean
    authenticated: boolean
    lastLoginTime: number
    lastLoginIP: string
    remarkName: any
    viptypeVersion: number
    authenticationTypes: number
    avatarDetail: any
    anchor: boolean
  }

}

export namespace LogoutType {
  export interface Root {
    code: number
  }
}
