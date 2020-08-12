import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/galeria/fotos',
    name: 'Galeria',
    component: () => import(/* webpackChunkName: "galeria" */ '../views/Galeria.vue'),
  },
  {
  path: '/galeria/info',
    name: 'info',
    component: () => import(/* webpackChunkName: "info" */ '../views/Informacion.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
