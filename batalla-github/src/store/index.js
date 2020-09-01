import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Player1:{nombre: null, score: null},
    Player2:{nombre: null, score: null},
    ganador: "¿Quién es el ganador?"
  },  
  mutations: {
    guardarplayer(state,player){
      console.log('guardarplayer')
      console.log("jugador "+player.nombre);
      console.log("este "+player.jugador);
      if (player.nombre == "Player 1"){
        state.Player1.nombre = player.jugador.login;
        state.Player1.score = player.jugador.public_repos + player.jugador.followers + player.jugador.following + player.jugador.public_gists;
        console.log("Player 1 "+state.Player1.score);
        console.log("Player 2 "+state.Player2.score);
      } else if(player.nombre == "Player 2"){
        state.Player2.nombre = player.jugador.login;
        state.Player2.score = player.jugador.public_repos + player.jugador.followers + player.jugador.following + player.jugador.public_gists;
        console.log("Player 1 "+state.Player1.score);
        console.log("Player 2 "+state.Player2.score);
      }
    },
    batalla(state){
      console.log("Batallando");
      console.log("Player 1 "+state.Player1.score);
      console.log("Player 2 "+state.Player2.score);
      if(state.Player1.score > state.Player2.score){
         state.ganador = "El ganador es: " + state.Player1.nombre;
         console.log(state.ganador);
      } else {
         state.ganador = "El ganador es: " + state.Player2.nombre;
         console.log(state.ganador);
      }
      // for (var jugador in state.jugadores){

      //   if(ganador.followers < jugador.followers){
      //     ganador= jugador
      //   }
      // }
      // return state.jugadores[0]
    },
  },
  actions: {
  },
  modules: {
  }
})
