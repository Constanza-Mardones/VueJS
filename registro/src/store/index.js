import Vue from 'vue';
import Vuex from 'vuex';
import {db} from '../firebase'

Vue.use(Vuex);
console.log(db);
export default new Vuex.Store({
  state: {
    user:{
      loginIn: false,
      data: null
    },
  },
  getters:{
    user (state){
      return state.user
    }
  },
  mutations:{
    SET_LOGGED_IN(state, value){
      state.user.loggedIn = value 
    },
    SET_USER(state, data){
      state.user.data = data
    },
    SET_POSTS(state, pos){
      state.postsx = pos
    }
  },
  actions: {
    fetchUser({commit},user){
      commit('SET_LOGGED_IN',user!==null)
      if(user){
        commit('SET_USER', {
          displayName: user.displayName,
          email: user.email
        })
      }else{
        commit('SET_USER', null)
      }
    },
    getPosts({commit}, ps){
      commit('SET_POSTS',ps)
    }
  },
  modules: {
  }
})
