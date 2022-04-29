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
}

export namespace SearchResultType {
  export namespace SearchResultSongType {
    export interface Root {
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

  export namespace SearchResultPlaylistType {
    export interface Root {
      searchQcReminder: any
      playlists: Playlist[]
      playlistCount: number
    }

    export interface Playlist {
      id: number
      name: string
      coverImgUrl: string
      creator: Creator
      subscribed: boolean
      trackCount: number
      userId: number
      playCount: number
      bookCount: number
      specialType: number
      officialTags: any
      action: any
      actionType: any
      recommendText: any
      description?: string
      highQuality: boolean
    }

    export interface Creator {
      nickname: string
      userId: number
      userType: number
      avatarUrl: any
      authStatus: number
      expertTags?: string[]
      experts: any
    }

  }

  export namespace SearchResultAlbumType {
    export interface Root {
      albums: Album[]
      albumCount: number
    }

    export interface Album {
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
      company: string
      briefDesc: string
      artist: Artist
      songs: any[]
      alias: string[]
      status: number
      copyrightId: number
      commentThreadId: string
      artists: Artist2[]
      picId_str?: string
      isSub: boolean
      transNames?: string[]
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
      picId_str: string
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
    }
  }

  export namespace SearchResultArtistType {
    export interface Root {
      artistCount: number
      artists: Artist[]
      searchQcReminder: any
    }

    export interface Artist {
      id: number
      name: string
      picUrl: string
      alias: string[]
      albumSize: number
      picId: number
      img1v1Url: string
      img1v1: number
      mvSize: number
      followed: boolean
      alia?: string[]
      trans: any
      accountId?: number
    }
  }

  export namespace SearchResultLyricsType {
    export interface Root {
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
      l: L
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
      cp: number
      mv: number
      rtype: number
      rurl: any
      mst: number
      publishTime: number
      tns?: string[]
      privilege: Privilege
      lyrics: string[]
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

  export namespace SearchResultVideoType {
    export interface Root {
      videoCount: number
      searchQcReminder: any
      videos: Video[]
    }

    export interface Video {
      coverUrl: string
      title: string
      durationms: number
      playTime: number
      type: number
      creator: Creator[]
      aliaName: any
      transName: any
      vid: string
      markTypes?: number[]
      alg: string
    }

    export interface Creator {
      userId: number
      userName: string
    }
  }
}
