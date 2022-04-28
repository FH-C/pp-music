export namespace SearchDefaultType {
  export interface Root {
    code: number
    message: any
    data: Data
  }

  export interface Data {
    showKeyword: string
    styleKeyword: StyleKeyword
    realkeyword: string
    searchType: number
    action: number
    alg: string
    gap: number
    source: any
    bizQueryInfo: string
    logInfo: any
  }

  export interface StyleKeyword {
    keyWord: any
    descWord: string
  }
}

export namespace SearchHotDetailType {
  export interface Root {
    code: number
    data: Daum[]
    message: string
  }

  export interface Daum {
    searchWord: string
    score: number
    content: string
    source: number
    iconType: number
    iconUrl?: string
    url: string
    alg: string
  }
}

export namespace SearchSuggestType {
  export interface Root {
    result: Result
    code: number
  }

  export interface Result {
    allMatch: AllMatch[]
  }

  export interface AllMatch {
    keyword: string
    type: number
    alg: string
    lastKeyword: string
    feature: string
  }
}

export namespace CloudSearchType {
  export interface Root<T> {
    result: T
    code: number
  }

  export interface SongResult {
    searchQcReminder: any
    songs: Song[]
    songCount: number
  }

  export interface Song {
    name: string
    id: number
    pst: number
    t: number
    ar: Ar[]
    alia: string[]
    pop: number
    st: number
    rt?: string
    fee: number
    v: number
    crbt: any
    cf: string
    al: Al
    dt: number
    h?: H
    m?: M
    l?: L
    sq?: Sq
    hr?: Hr
    a: any
    cd: string
    no: number
    rtUrl: any
    ftype: number
    rtUrls: any[]
    djId: number
    copyright: number
    s_id: number
    mark: number
    originCoverType: number
    originSongSimpleData: any
    tagPicList: any
    resourceState: boolean
    version: number
    songJumpInfo: any
    entertainmentTags: any
    single: number
    noCopyrightRcmd: any
    mst: number
    cp: number
    mv: number
    rtype: number
    rurl: any
    publishTime: number
    privilege: Privilege
    tns?: string[]
  }

  export interface Ar {
    id: number
    name: string
    tns: any[]
    alias: string[]
    alia?: string[]
  }

  export interface Al {
    id: number
    name: string
    picUrl: string
    tns: string[]
    pic_str?: string
    pic: number
  }

  export interface H {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface M {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface L {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface Sq {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface Hr {
    br: number
    fid: number
    size: number
    vd: number
    sr: number
  }

  export interface Privilege {
    id: number
    fee: number
    payed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    toast: boolean
    flag: number
    preSell: boolean
    playMaxbr: number
    downloadMaxbr: number
    maxBrLevel: string
    playMaxBrLevel: string
    downloadMaxBrLevel: string
    plLevel: string
    dlLevel: string
    flLevel: string
    rscl: any
    freeTrialPrivilege: FreeTrialPrivilege
    chargeInfoList: ChargeInfoList[]
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
    listenType: any
  }

  export interface ChargeInfoList {
    rate: number
    chargeUrl: any
    chargeMessage: any
    chargeType: number
  }

}
