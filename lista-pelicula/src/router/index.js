import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/comedy',
    name: 'Comedia',
    component: () => import(/* webpackChunkName: "about" */ '../views/Comedy.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
