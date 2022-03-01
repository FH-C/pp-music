import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../pages/login/index.vue'

const About = { template: '<div>About</div>' }
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
  { path: '/about', name: 'about', component: About },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
