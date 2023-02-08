import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "Video" */ '../views/Video.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
