import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../pages/login/index.vue'
import MobileLogin from '../pages/login/mobile.vue'
import Verify from '../pages/login/verify.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Login,
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
    path: '/verify',
    name: 'verify',
    component: Verify,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
