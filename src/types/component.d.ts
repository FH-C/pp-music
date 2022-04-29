import SvgIcon from 'components/SvgIcon.vue'
import MiniPlayerVue from 'components/MiniPlayer.vue'
import SearchResultSongVue from 'components/search/SearchResultSong.vue'
import SearchResultPlaylistVue from 'components/search/SearchResultPlaylist.vue'
import SearchResultAlbumVue from 'components/search/SearchResultAlbum.vue'
import SearchResultSingerVue from 'components/search/SearchResultSinger.vue'
import SearchResultLyricsVue from '@/components/search/SearchResultLyrics.vue'
import SearchResultVideoVue from 'components/search/SearchResultVideo.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon
    MiniPlayerVue: typeof MiniPlayerVue
    SearchResultSongVue: typeof SearchResultSongVue
    SearchResultPlaylistVue: typeof SearchResultPlaylistVue
    SearchResultAlbumVue: typeof SearchResultAlbumVue
    SearchResultSingerVue: typeof SearchResultSingerVue
    SearchResultLyricsVue: typeof SearchResultLyricsVue
    SearchResultVideoVue: typeof SearchResultVideoVue
  }
}
