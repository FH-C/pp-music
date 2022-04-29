export namespace SongDetailType {
  export interface Root {
    songs: Song[]
    privileges: Privilege[]
    code: number
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
    rt: string
    fee: number
    v: number
    crbt: any
    cf: string
    al: Al
    dt: number
    h: any
    m: M
    l: L
    sq: Sq
    hr: any
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
    rtype: number
    rurl: any
    mst: number
    cp: number
    mv: number
    publishTime: number,
    artists?: Ar[]
  }

  export interface Ar {
    id: number
    name: string
    tns: any[]
    alias: any[]
  }

  export interface Al {
    id: number
    name: string
    picUrl: string
    tns: any[]
    pic_str: string
    pic: number
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

export namespace SongUrlType {
  export type SongUrlArray = Root[]

  export interface Root {
    id: number
    url: string
    br: number
    size: number
    md5: string
    code: number
    expi: number
    type: string
    gain: number
    fee: number
    uf: any
    payed: number
    flag: number
    canExtend: boolean
    freeTrialInfo?: FreeTrialInfo
    level: string
    encodeType: string
    freeTrialPrivilege: FreeTrialPrivilege
    freeTimeTrialPrivilege: FreeTimeTrialPrivilege
    urlSource: number
  }

  export interface FreeTrialInfo {
    start: number
    end: number
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
    listenType: any
  }

  export interface FreeTimeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
    type: number
    remainTime: number
  }
}

export namespace LyricType {
  export interface Root {
    sgc: boolean
    sfy: boolean
    qfy: boolean
    lrc: Lrc
    klyric: Klyric
    tlyric: Tlyric
    code: number
  }

  export interface Lrc {
    version: number
    lyric: string
  }

  export interface Klyric {
    version: number
    lyric: string
  }

  export interface Tlyric {
    version: number
    lyric: string
  }

  export interface Lyrics {
    time: number
    content: string
  }
}

export namespace SongUrlType {
  export interface Root {
    data: Daum[]
    code: number
  }

  export interface Daum {
    id: number
    url?: string
    br: number
    size: number
    md5?: string
    code: number
    expi: number
    type?: string
    gain: number
    fee: number
    uf: any
    payed: number
    flag: number
    canExtend: boolean
    freeTrialInfo: any
    level?: string
    encodeType?: string
    freeTrialPrivilege: FreeTrialPrivilege
    freeTimeTrialPrivilege: FreeTimeTrialPrivilege
    urlSource: number
  }

  export interface FreeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
    listenType: any
  }

  export interface FreeTimeTrialPrivilege {
    resConsumable: boolean
    userConsumable: boolean
    type: number
    remainTime: number
  }

}
