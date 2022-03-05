import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../pages/login/index.vue'
import MobileLogin from '../pages/login/mobile.vue'
import VerifyLogin from '../pages/login/verifyLogin.vue'
import PasswordLogin from '../pages/login/passwordLogin.vue'

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
    path: '/verify_login',
    name: 'VerifyLogin',
    component: VerifyLogin,
  },
  {
    path: '/password_ogin',
    name: 'PasswordLogin',
    component: PasswordLogin,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
