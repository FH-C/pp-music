import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import 'vant/lib/index.css'
import { registerSW } from 'virtual:pwa-register'
import {
  Button, Checkbox, NavBar, Picker, Field, Dialog, Popup, Toast, CountDown, Swipe, SwipeItem, Image,
  Icon, Search, Tabbar, TabbarItem, Tag, Cell, PullRefresh, Tab, Tabs, List, Progress, CellGroup
} from 'vant'
import SvgIcon from 'components/SvgIcon.vue'
import MiniPlayerVue from 'components/MiniPlayer.vue'
import SearchResultSongVue from 'components/search/SearchResultSong.vue'
import SearchResultPlaylistVue from 'components/search/SearchResultPlaylist.vue'
import SearchResultAlbumVue from 'components/search/SearchResultAlbum.vue'
import SearchResultSingerVue from 'components/search/SearchResultSinger.vue'
import SearchResultLyricsVue from './components/search/SearchResultLyrics.vue'
import SearchResultVideoVue from 'components/search/SearchResultVideo.vue'
import store from '@/store'
import App from './App.vue'
import router from './router/index'

const updateSW = registerSW({
  onNeedRefresh() { },
  onOfflineReady() { }
})
const app = createApp(App)
app.use(Button)
  .use(Checkbox)
  .use(NavBar)
  .use(Picker)
  .use(Field)
  .use(Dialog)
  .use(Popup)
  .use(Toast)
  .use(CountDown)
  .use(Swipe)
  .use(SwipeItem)
  .use(Image)
  .use(Icon)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Search)
  .use(Tag)
  .use(Cell)
  .use(PullRefresh)
  .use(Tab)
  .use(Tabs)
  .use(List)
  .use(Progress)
  .use(CellGroup)
  .component('svg-icon', SvgIcon)
  .component('MiniPlayerVue', MiniPlayerVue)
  // .component('SearchResultComprehensiveVue', SearchResultComprehensiveVue)
  .component('SearchResultSongVue', SearchResultSongVue)
  .component('SearchResultPlaylistVue', SearchResultPlaylistVue)
  .component('SearchResultVideoVue', SearchResultVideoVue)
  .component('SearchResultSingerVue', SearchResultSingerVue)
  .component('SearchResultLyricsVue', SearchResultLyricsVue)
  .component('SearchResultAlbumVue', SearchResultAlbumVue)
  // .component('SearchResultSoundVue', SearchResultSoundVue)
  // .component('SearchResultUserVue', SearchResultUserVue)
  .use(router)
  // .use(createPinia())
  .use(store)
  .mount('#app')
