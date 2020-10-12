import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase";
import VueFirestore from 'vue-firestore';
// import firebase from 'firebase/app';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(VueFirestore, {key: 'id'});

const firebaseConfig = {
  apiKey: "AIzaSyCZJRSmLAlE-64ymBg0mR7LRlWRjgIylIg",
  authDomain: "comitpelis.firebaseapp.com",
  databaseURL: "https://comitpelis.firebaseio.com",
  projectId: "comitpelis",
  storageBucket: "comitpelis.appspot.com",
  messagingSenderId: "540031599778",
  appId: "1:540031599778:web:449dd3508095ad473443fb"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

let app= null

firebase.auth().onAuthStateChanged(()=>{
  if (!app){
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})


