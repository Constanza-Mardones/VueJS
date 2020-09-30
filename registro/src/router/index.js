import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'

import * as firebase from 'firebase/app';
import "firebase/auth";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register
    },
    {
      path: '/secret',
      name: 'secret',
      component: () => import(/* webpackChunkName: "secret" */ '../views/Secret.vue'),
      meta: {requiresAuth:true}
    },
  ]
})

router.beforeEach((to, from, next) => {
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  let currentUser = firebase.auth().currentUser;
  if (requiresAuth && !currentUser) next('/')
  else next()
})

export default router
