import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from 'pages/login/index.vue'
import MobileLogin from 'pages/login/mobile.vue'
import VerifyLogin from 'pages/login/verifyLogin.vue'
import PasswordLogin from 'pages/login/passwordLogin.vue'
import UserInfo from 'pages/user/index.vue'
import Search from 'pages/search/index.vue'
import SearchResult from 'pages/search/result.vue'
import Home from 'pages/home.vue'
import Playlist from 'pages/playlist/index.vue'
import Player from 'pages/player/index.vue'
import Album from 'pages/album/index.vue'
import test from 'pages/test/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/mobile',
    name: 'MobileLogin',
    component: MobileLogin,
  },
  {
    path: '/verify_login',
    name: 'VerifyLogin',
    component: VerifyLogin,
  },
  {
    path: '/password_ogin',
    name: 'PasswordLogin',
    component: PasswordLogin,
  },
  {
    path: '/user',
    name: 'UserInfo',
    component: UserInfo,
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/search-result',
    name: 'SearchResult',
    component: SearchResult,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/playlist',
    name: 'Playlist',
    component: Playlist,
  },
  {
    path: '/player',
    name: 'Player',
    component: Player,
  },
  {
    path: '/album',
    name: 'Album',
    component: Album,
  },
  {
    path: '/test',
    name: 'test',
    component: test,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
