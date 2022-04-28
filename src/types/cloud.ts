export namespace CloudType {
  export interface Root {
    data: Daum[]
    count: number
    size: string
    maxSize: string
    upgradeSign: number
    hasMore: boolean
    code: number
  }

  export interface Daum {
    simpleSong: SimpleSong
    fileSize: number
    songId: number
    album: string
    artist: string
    bitrate: number
    songName: string
    addTime: number
    cover: number
    coverId: string
    lyricId: string
    version: number
    fileName: string
  }

  export interface SimpleSong {
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
    cf?: string
    al: Al
    dt: number
    h?: H
    m?: M
    l?: L
    a: any
    cd?: string
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
    single: number
    noCopyrightRcmd?: NoCopyrightRcmd
    rtype: number
    rurl: any
    mst: number
    cp: number
    mv: number
    publishTime: number
    privilege: Privilege
    tns?: string[]
  }

  export interface Ar {
    id: number
    name?: string
    tns: any[]
    alias: any[]
  }

  export interface Al {
    id: number
    name?: string
    picUrl: string
    tns: any[]
    pic_str?: string
    pic: number
  }

  export interface H {
    br: number
    fid: number
    size: number
    vd: number
  }

  export interface M {
    br: number
    fid: number
    size: number
    vd: number
  }

  export interface L {
    br: number
    fid: number
    size: number
    vd: number
  }

  export interface NoCopyrightRcmd {
    type: number
    typeDesc: string
    songId?: string
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
  }

}
