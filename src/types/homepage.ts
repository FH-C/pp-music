export namespace BallType {
  export interface Root {
    code: number
    data: Daum[]
    message: string
  }

  export interface Daum {
    id: number
    name: string
    iconUrl: string
    url: string
    skinSupport: boolean
    homepageMode: string
  }
}

export namespace HomepageType {
  export interface Root {
    code: number
    data: Data
    message: string
  }

  export interface Data {
    cursor: any
    blocks: Block[]
    hasMore: boolean
    blockUUIDs: any
    pageConfig: PageConfig
    guideToast: GuideToast
    internalTest: any
    titles: any[]
    blockCodeOrderList: any
  }

  export interface Block {
    blockCode: string
    showType: string
    dislikeShowType: number
    extInfo: any
    canClose: boolean
    blockStyle: number
    action?: string
    actionType?: string
    uiElement?: UiElement
    creatives?: Crea[]
    defaultTab?: string
    crossPlatformConfig?: CrossPlatformConfig
  }

  export interface UiElement {
    subTitle?: SubTitle
    button?: Button
    rcmdShowType: string
  }

  export interface SubTitle {
    title: string
    titleImgUrl?: string
  }

  export interface Button {
    action: string
    actionType: string
    text: string
    iconUrl: any
  }

  export interface Crea {
    creativeType: string
    actionType?: string
    uiElement?: UiElement2
    resources: Resource[]
    position: number
    creativeId?: string
    action?: string
    alg?: string
    logInfo?: string
    code?: string
  }

  export interface UiElement2 {
    mainTitle?: MainTitle
    subTitle?: SubTitle2
    image?: Image
    labelTexts?: string[]
    rcmdShowType: string
    button?: Button2
  }

  export interface MainTitle {
    title: string
  }

  export interface SubTitle2 {
    title: string
  }

  export interface Image {
    imageUrl: string
  }

  export interface Button2 {
    action: string
    actionType: string
    text: string
    iconUrl: any
  }

  export interface Resource {
    uiElement: UiElement3
    resourceType: string
    resourceId: string
    resourceUrl?: string
    resourceExtInfo?: ResourceExtInfo
    action: string
    actionType: string
    valid: boolean
    alg?: string
    logInfo?: string
  }

  export interface UiElement3 {
    mainTitle: MainTitle2
    subTitle?: SubTitle3
    image?: Image2
    labelTexts?: string[]
    rcmdShowType: string
    labelUrls?: string[]
    labelType?: string
  }

  export interface MainTitle2 {
    title: string
    titleImgUrl?: string
  }

  export interface SubTitle3 {
    title: string
    titleType?: string
  }

  export interface Image2 {
    imageUrl: string
  }

  export interface ResourceExtInfo {
    playCount?: number
    highQuality?: boolean
    specialCover?: number
    specialType?: number
    djProgram?: DjProgram
    startTime?: number
    endTime?: number
    subed?: boolean
    canSubscribe?: boolean
    eventId?: string
    eventType?: string
    users?: User[]
    artists?: Artist4[]
    song?: Song
    songData?: SongData
    songPrivilege?: SongPrivilege
    commentSimpleData?: CommentSimpleData
    alias?: string
  }

  export interface DjProgram {
    mainSong: MainSong
    songs: any
    dj: Dj
    blurCoverUrl: any
    radio: Radio
    subscribedCount: number
    reward: boolean
    mainTrackId: number
    serialNum: number
    listenerCount: number
    name: string
    id: number
    createTime: number
    description: string
    userId: number
    coverUrl: string
    commentThreadId: string
    channels: string[]
    titbits: any
    titbitImages: any
    pubStatus: number
    trackCount: number
    bdAuditStatus: number
    programFeeType: number
    buyed: boolean
    programDesc: any
    h5Links: any[]
    coverId: number
    adjustedPlayCount: number
    canReward: boolean
    auditStatus: number
    updateTime: number
    categoryId: number
    category: string
    secondCategoryId: number
    secondCategory: string
    scheduledPublishTime: number
    privacy: boolean
    disPlayStatus: string
    createEventId: number
    djPlayRecordVo: any
    publish: boolean
    duration: number
    extProperties: any
    xInfo: any
  }

  export interface MainSong {
    name: string
    id: number
    position: number
    alias: any[]
    status: number
    fee: number
    copyrightId: number
    disc: string
    no: number
    artists: Artist[]
    album: Album
    starred: boolean
    popularity: number
    score: number
    starredNum: number
    duration: number
    playedNum: number
    dayPlays: number
    hearTime: number
    sqMusic: any
    hrMusic: any
    ringtone: string
    crbt: any
    audition: any
    copyFrom: string
    commentThreadId: string
    rtUrl: any
    ftype: number
    rtUrls: any[]
    copyright: number
    transName: any
    sign: any
    mark: number
    originCoverType: number
    originSongSimpleData: any
    single: number
    noCopyrightRcmd: any
    mvid: number
    hMusic?: HMusic
    mMusic?: MMusic
    lMusic: LMusic
    bMusic: BMusic
    mp3Url: any
    rtype: number
    rurl: any
    extProperties: any
    xInfo: any
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
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
    extProperties: any
    xInfo: any
  }

  export interface Album {
    name: string
    id: number
    type: any
    size: number
    picId: number
    blurPicUrl?: string
    companyId: number
    pic: number
    picUrl: string
    publishTime: number
    description: string
    tags: string
    company: any
    briefDesc: string
    artist: Artist2
    songs: any[]
    alias: any[]
    status: number
    copyrightId: number
    commentThreadId: string
    artists: Artist3[]
    subType: any
    transName: any
    onSale: boolean
    mark: number
    gapless: number
    extProperties?: ExtProperties
    xInfo?: XInfo
  }

  export interface Artist2 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
    extProperties: any
    xInfo: any
  }

  export interface Artist3 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
    extProperties: any
    xInfo: any
  }

  export interface ExtProperties {
    picId_str: string
  }

  export interface XInfo {
    picId_str: string
  }

  export interface HMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
    extProperties: any
    xInfo: any
  }

  export interface MMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
    extProperties: any
    xInfo: any
  }

  export interface LMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
    extProperties: any
    xInfo: any
  }

  export interface BMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
    extProperties: any
    xInfo: any
  }

  export interface Dj {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    accountStatus: number
    gender: number
    city: number
    birthday: number
    userId: number
    userType: number
    nickname: string
    signature: string
    description: string
    detailDescription: string
    avatarImgId: number
    backgroundImgId: number
    backgroundUrl: string
    authority: number
    mutual: boolean
    expertTags: any
    experts?: Experts
    djStatus: number
    vipType: number
    remarkName: any
    authenticationTypes: number
    avatarDetail: any
    avatarImgIdStr: string
    backgroundImgIdStr: string
    anchor: boolean
  }

  export interface Experts {
    '1': string
  }

  export interface Radio {
    id: number
    dj: any
    name: string
    picUrl: string
    desc: string
    subCount: number
    programCount: number
    createTime: number
    categoryId: number
    category: string
    secondCategoryId: number
    secondCategory: string
    radioFeeType: number
    feeScope: number
    buyed: boolean
    videos: any
    finished: boolean
    underShelf: boolean
    purchaseCount: number
    price: number
    originalPrice: number
    discountPrice: any
    lastProgramCreateTime: number
    lastProgramName: any
    lastProgramId: number
    picId: number
    rcmdText?: string
    hightQuality: boolean
    whiteList: boolean
    liveInfo: any
    playCount: number
    icon: any
    privacy: boolean
    intervenePicUrl: string
    intervenePicId: number
    dynamic: boolean
    shortName?: string
    taskId: number
    manualTagsDTO: ManualTagsDto
    scoreInfoDTO: any
    descPicList: any
    composeVideo: boolean
    extProperties: any
    xInfo: any
  }

  export interface ManualTagsDto {
    themeDescTags?: ThemeDescTags
    contentDescTags?: ContentDescTags
    hotTags?: HotTags
    brandColumnTags?: BrandColumnTags
  }

  export interface ThemeDescTags {
    id: number
    tagGroupName: any
    tagList: any[]
  }

  export interface ContentDescTags {
    id: number
    tagGroupName: any
    tagList: any[]
  }

  export interface HotTags {
    id: number
    tagGroupName: any
    tagList: any[]
  }

  export interface BrandColumnTags {
    id: number
    tagGroupName: any
    tagList: any[]
  }

  export interface User {
    defaultAvatar: boolean
    province: number
    authStatus: number
    followed: boolean
    avatarUrl: string
    accountStatus: number
    gender: number
    city: number
    birthday: number
    userId: number
    userType: number
    nickname: string
    signature: any
    description: any
    detailDescription: any
    avatarImgId: number
    backgroundImgId: number
    backgroundUrl: any
    authority: number
    mutual: boolean
    expertTags: any
    experts: any
    djStatus: number
    vipType: number
    remarkName: any
    authenticationTypes: number
    avatarDetail: any
    avatarImgIdStr: string
    backgroundImgIdStr: string
    anchor: boolean
  }

  export interface Artist4 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl?: string
    img1v1Url?: string
    albumSize: number
    alias?: any[]
    trans?: string
    musicSize: number
    topicPerson: number
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
    h: H
    m: M
    l: L
    sq: Sq
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
    originSongSimpleData?: OriginSongSimpleData
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
    videoInfo: VideoInfo
    tns?: string[]
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

  export interface OriginSongSimpleData {
    songId: number
    name: string
    artists: Artist5[]
    albumMeta: AlbumMeta
  }

  export interface Artist5 {
    id: number
    name: string
  }

  export interface AlbumMeta {
    id: number
    name: string
  }

  export interface VideoInfo {
    moreThanOne: boolean
    video?: Video
  }

  export interface Video {
    vid: string
    type: number
    title: any
    playTime: number
    coverUrl: any
    publishTime: number
    artists: any
    alias: any
  }

  export interface SongData {
    name: string
    id: number
    position: number
    alias: string[]
    status: number
    fee: number
    copyrightId: number
    disc: string
    no: number
    artists: Artist6[]
    album: Album2
    starred: boolean
    popularity: number
    score: number
    starredNum: number
    duration: number
    playedNum: number
    dayPlays: number
    hearTime: number
    sqMusic?: SqMusic
    hrMusic?: HrMusic
    ringtone?: string
    crbt: any
    audition: any
    copyFrom: string
    commentThreadId: string
    rtUrl: any
    ftype: number
    rtUrls: any[]
    copyright: number
    transName?: string
    sign: any
    mark: number
    originCoverType: number
    originSongSimpleData?: OriginSongSimpleData2
    single: number
    noCopyrightRcmd: any
    mvid: number
    hMusic: HMusic2
    mMusic: MMusic2
    lMusic: LMusic2
    bMusic: BMusic2
    mp3Url: any
    rtype: number
    rurl: any
    transNames?: string[]
  }

  export interface Artist6 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
  }

  export interface Album2 {
    name: string
    id: number
    type: string
    size: number
    picId: number
    blurPicUrl: string
    companyId: number
    pic: number
    picUrl: string
    publishTime: number
    description: string
    tags: string
    company?: string
    briefDesc: string
    artist: Artist7
    songs: any[]
    alias: string[]
    status: number
    copyrightId: number
    commentThreadId: string
    artists: Artist8[]
    subType: string
    transName: any
    onSale: boolean
    mark: number
    gapless: number
    picId_str?: string
  }

  export interface Artist7 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
  }

  export interface Artist8 {
    name: string
    id: number
    picId: number
    img1v1Id: number
    briefDesc: string
    picUrl: string
    img1v1Url: string
    albumSize: number
    alias: any[]
    trans: string
    musicSize: number
    topicPerson: number
  }

  export interface SqMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface HrMusic {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface OriginSongSimpleData2 {
    songId: number
    name: string
    artists: Artist9[]
    albumMeta: AlbumMeta2
  }

  export interface Artist9 {
    id: number
    name: string
  }

  export interface AlbumMeta2 {
    id: number
    name: string
  }

  export interface HMusic2 {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface MMusic2 {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface LMusic2 {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface BMusic2 {
    name: any
    id: number
    size: number
    extension: string
    sr: number
    dfsId: number
    bitrate: number
    playTime: number
    volumeDelta: number
  }

  export interface SongPrivilege {
    id: number
    fee: number
    payed: number
    realPayed: number
    st: number
    pl: number
    dl: number
    sp: number
    cp: number
    subp: number
    cs: boolean
    maxbr: number
    fl: number
    pc: any
    toast: boolean
    flag: number
    paidBigBang: boolean
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

  export interface CommentSimpleData {
    content: string
    commentId: number
    threadId?: string
    userId: number
    userName?: string
  }

  export interface CrossPlatformConfig {
    containerType: string
    rnContent: RnContent
  }

  export interface RnContent {
    engineId: string
    moduleName: string
    component: string
    params: Params
    estimatedRatio: string
    estimatedHeight: number
  }

  export interface Params { }

  export interface PageConfig {
    refreshToast: string
    nodataToast: string
    refreshInterval: number
    title: any
    fullscreen: boolean
    abtest: string[]
    songLabelMarkPriority: string[]
    songLabelMarkLimit: number
    homepageMode: string
    showModeEntry: boolean
    orderInfo: string
  }

  export interface GuideToast {
    hasGuideToast: boolean
    toastList: any[]
  }

}
