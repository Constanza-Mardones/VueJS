import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coment: [],
  },
  mutations: {
    newPost(datos){
      console.log(datos);
      this.state.coment.push({
        usuario: datos.user,
        texto: datos.text,
        fecha: new Date(),
        like: 0,
      })
      console.log(this.state.coment);
    },
    aumentarLike(id){
      console.log("aumentando")
      this.state.coment[id].like++;
    }
  },
  actions: {
  },
  modules: {
  }
})
