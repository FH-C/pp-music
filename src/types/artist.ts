export namespace ArtistFollowType {
  export interface Root {
    code: number
    message: string
    data: Data
  }

  export interface Data {
    isFollow: boolean
    fansCnt: number
    followCnt: number
    followDay: string
    follow: boolean
    id: number
    isFollowed: boolean
    followCount: number
    name: string
    identity: string
  }
}

export namespace ArtistDetailType {
  export interface Root {
    code: number
    message: string
    data: Data
  }

  export interface Data {
    videoCount: number
    identify: Identify
    artist: Artist
    blacklist: boolean
    preferShow: number
    showPriMsg: boolean
    secondaryExpertIdentiy: SecondaryExpertIdentiy[]
    user?: any
  }

  export interface Identify {
    imageUrl: any
    imageDesc: string
    actionUrl: string
  }

  export interface Artist {
    id: number
    cover: string
    name: string
    transNames: any[]
    identities: string[]
    identifyTag: any
    briefDesc: string
    rank: Rank
    albumSize: number
    musicSize: number
    mvSize: number
  }

  export interface Rank {
    rank: number
    type: number
  }

  export interface SecondaryExpertIdentiy {
    expertIdentiyId: number
    expertIdentiyName: string
    expertIdentiyCount: number
  }
}

export namespace ArtistDescType {
  export interface Root {
    introduction: Introduction[]
    briefDesc: string
    count: number
    topicData: TopicDaum[]
    code: number
  }

  export interface Introduction {
    ti: string
    txt: string
  }

  export interface TopicDaum {
    topic: Topic
    creator: Creator
    shareCount: number
    commentCount: number
    likedCount: number
    liked: boolean
    rewardCount: number
    rewardMoney: number
    relatedResource: any
    rectanglePicUrl: string
    coverUrl: string
    categoryId: number
    categoryName: string
    mainTitle: string
    commentThreadId: string
    reward: boolean
    shareContent: string
    wxTitle: string
    addTime: number
    seriesId: number
    showComment: boolean
    showRelated: boolean
    memo: any
    summary: string
    recmdTitle: string
    recmdContent: string
    readCount: number
    url: string
    tags: string[]
    title: string
    id: number
    number: number
  }

  export interface Topic {
    id: number
    addTime: number
    mainTitle: string
    title: string
    content: Content[]
    userId: number
    cover: number
    headPic: number
    shareContent: string
    wxTitle: string
    showComment: boolean
    status: number
    seriesId: number
    pubTime: number
    readCount: number
    tags: string[]
    pubImmidiatly: boolean
    auditor: string
    auditTime: number
    auditStatus: number
    startText: string
    delReason: string
    showRelated: boolean
    fromBackend: boolean
    rectanglePic: number
    updateTime: number
    reward: boolean
    summary: string
    memo: any
    adInfo: string
    categoryId: number
    hotScore: number
    recomdTitle: string
    recomdContent: string
    number: number
  }

  export interface Content {
    type: number
    id: number
    content?: string
  }

  export interface Creator {
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
    description?: string
    detailDescription?: string
    defaultAvatar: boolean
    expertTags?: string[]
    experts?: Experts
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

  export interface Experts {
    '1': string
  }
}

export namespace SimilarArtistsType {
  export interface Root {
    artists: Artist[]
    code: number
  }

  export interface Artist {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: string[]
    trans: string
    musicSize: number
    topicPerson: number
    showPrivateMsg: any
    isSubed: any
    accountId?: number
    picId_str?: string
    img1v1Id_str?: string
    transNames: any
    followed: boolean
    mvSize: any
    publishTime: any
    identifyTag: any
    alg: string
    fansCount: number
  }
}

export namespace ArtistHotSongsType {
  export interface Root {
    artist: Artist
    hotSongs: HotSong[]
    more: boolean
    code: number
  }

  export interface Artist {
    img1v1Id: number
    topicPerson: number
    followed: boolean
    alias: string[]
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    trans: string
    name: string
    id: number
    publishTime: number
    picId_str: string
    img1v1Id_str: string
    mvSize: number
  }

  export interface HotSong {
    rtUrls: any[]
    ar: Ar[]
    al: Al
    st: number
    noCopyrightRcmd: any
    songJumpInfo: any
    alia: string[]
    pop: number
    rt?: string
    mst: number
    cp: number
    crbt: any
    cf: string
    dt: number
    rtUrl: any
    ftype: number
    rtype: number
    rurl: any
    pst: number
    djId: number
    no: number
    fee: number
    mv: number
    t: number
    v: number
    h?: H
    l?: L
    sq?: Sq
    hr?: Hr
    cd: string
    a: any
    m?: M
    name: string
    id: number
    privilege: Privilege
    eq?: string
    tns?: string[]
  }

  export interface Ar {
    id: number
    name: string
    alia?: string[]
  }

  export interface Al {
    id: number
    name: string
    picUrl: string
    pic_str: string
    pic: number
    alia?: string[]
    tns?: string[]
  }

  export interface H {
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

  export interface M {
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

export namespace ArtistHotAlbumsType {
  export interface Root {
    artist: Artist
    hotAlbums: HotAlbum[]
    more: boolean
    code: number
  }

  export interface Artist {
    img1v1Id: number
    topicPerson: number
    followed: boolean
    alias: string[]
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    trans: string
    name: string
    id: number
    picId_str: string
    img1v1Id_str: string
  }

  export interface HotAlbum {
    songs: any[]
    paid: boolean
    onSale: boolean
    mark: number
    blurPicUrl: string
    artists: Artist2[]
    alias: string[]
    copyrightId: number
    picId: number
    artist: Artist3
    briefDesc: string
    pic: number
    publishTime: number
    company: string
    picUrl: string
    commentThreadId: string
    companyId: number
    description: string
    tags: string
    status: number
    subType: string
    name: string
    id: number
    type: string
    size: number
    picId_str: string
    isSub: boolean
  }

  export interface Artist2 {
    img1v1Id: number
    topicPerson: number
    followed: boolean
    alias: any[]
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    trans: string
    name: string
    id: number
    img1v1Id_str: string
  }

  export interface Artist3 {
    img1v1Id: number
    topicPerson: number
    followed: boolean
    alias: string[]
    picId: number
    briefDesc: string
    musicSize: number
    albumSize: number
    picUrl: string
    img1v1Url: string
    trans: string
    name: string
    id: number
    picId_str: string
    img1v1Id_str: string
  }
}

export namespace ArtistSongsType {
  export interface Root {
    songs: Song[]
    more: boolean
    total: number
    code: number
  }

  export interface Song {
    rtUrls: any[]
    ar: Ar[]
    al: Al
    st: number
    noCopyrightRcmd: any
    songJumpInfo: any
    ftype: number
    rtype: number
    rurl: any
    pst: number
    alia: string[]
    pop: number
    rt?: string
    mst: number
    cp: number
    crbt: any
    cf: string
    dt: number
    rtUrl: any
    djId: number
    no: number
    fee: number
    mv: number
    v: number
    h?: H
    l?: L
    sq?: Sq
    hr?: Hr
    t: number
    cd: string
    a: any
    m?: M
    name: string
    id: number
    privilege: Privilege
    eq?: string
    tns?: string[]
  }

  export interface Ar {
    id: number
    name: string
  }

  export interface Al {
    id: number
    name: string
    pic_str: string
    pic: number
    alia?: string[]
    tns?: string[]
    picUrl: string
  }

  export interface H {
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

  export interface M {
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

export namespace ArtistVideosType {
  export interface Root {
    code: number
    message: string
    data: Data
  }

  export interface Data {
    records: Record[]
    page: Page
  }

  export interface Record {
    id: string
    type: number
    position: any
    resource: Resource
    alg: any
    logInfo: any
    reason: any
    reasonType: any
    priorShowLive: any
    actionTime: any
    matchField: number
    matchFieldContent: any
    srcId: any
    sameCity: boolean
    followedShowReason: any
  }

  export interface Resource {
    mlogBaseData: MlogBaseData
    mlogExtVO: MlogExtVo
    userProfile: any
    relatedPubUsers: any
    status: number
    shareUrl: string
    source: any
    mlogPlaylists: any
  }

  export interface MlogBaseData {
    id: string
    type: number
    originalTitle: any
    text: string
    desc: string
    interveneText: any
    pubTime: number
    coverUrl: string
    coverDetail: any
    greatCover: boolean
    coverPicKey: string
    coverHeight: number
    coverWidth: number
    coverColor: number
    coverDynamicUrl: any
    audioDTO: any
    talk: any
    threadId: string
    duration: number
    video: any
    videos: Video[]
    graphic: any
    relatedPubUsers: any
    mixInfo: any
  }

  export interface Video {
    tagSign: TagSign
    tag: string
    url: string
    duration: number
    size: number
    width: number
    height: number
    container: string
    md5: string
    check: boolean
  }

  export interface TagSign {
    br: number
    type: string
    tagSign: string
  }

  export interface MlogExtVo {
    likedCount: number
    commentCount: number
    playCount: number
    shareCount: number
    song?: Song
    algSong: any
    videoStartPlayTime: any
    canCollect: boolean
    artistName: string
    artists: Artist2[]
    specialTag: any
    channelTag: any
  }

  export interface Song {
    id: number
    name: string
    coverUrl: string
    duration: number
    artists: Artist[]
    privilege: Privilege
    albumName: string
    startTime: any
    endTime: any
    isLiked: any
    playedNum: any
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

  export interface Artist {
    artistId: number
    artistName: string
  }

  export interface Artist2 {
    id: number
    name: string
    img1v1Url: string
    followed: boolean
    mlogUser: any
  }

  export interface Page {
    size: number
    cursor: string
    more: boolean
  }
}

export namespace SubArtistType {
  export interface Root {
    code: number
    message: string
    data: any
  }
}
