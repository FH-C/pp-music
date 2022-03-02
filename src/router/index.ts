import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../pages/login/index.vue'
import mobileLogin from '../pages/login/mobile.vue'

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
    name: 'mobileLogin',
    component: mobileLogin,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
