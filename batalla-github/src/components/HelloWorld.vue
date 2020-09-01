<template>
  <div id="hello">
    <div class="player1">
      <p>{{user}} <input v-model="nombre" /><button @click="updateResults">Buscar</button></p>
      <img src="https://www.siur.com.uy/siur/wp-content/themes/traveltour-child/pd-ideas/loading.gif" width="50" v-if="Loading" />
      <!-- <div v-if="info != null" class='cuadro'> -->
      <div v-if="info && !Loading" class='cuadro'>
        <h2>{{user}}</h2>
        <img :src= 'info.avatar_url' >
        <p>Username: {{ info.login }}</p>
        <p>Public Repositories: {{ info.public_repos }}</p>
        <p>Number of Followers: {{ info.followers }}</p>
        <p>Number of Following: {{ info.following }}</p>
        <p>Public Gists: {{ info.public_gists }}</p>
        <h3>Total Score: {{  info.public_repos + info.followers + info.following + info.public_gists}}</h3>
      </div>
    </div>
  </div>
</template>

<script>
// import store from '@/store/index'
export default {
  name: 'HelloWorld',
  props:{
    user: String,
  },
  data() {
    return {
      info: null,
      nombre: '',
      Loading:false
    };
  },
  methods: {
    updateResults() {
      this.getBerryData();
      
    },
    async getBerryData() {
      try {
        this.Loading= true;
        let response = await this.$http.get(`https://api.github.com/users/${this.nombre}`);  // instead of hardcoding a value, let's use whatever has been typed in the input box
        this.info = response.data;
        console.log('info:'+ this.info)
        let save = {nombre: this.user, jugador:this.info};
        this.$store.commit('guardarplayer', save);
        this.Loading = false;
      }
      catch(error) {
        console.log(`Something went wrong: ${error}`);
        this.info = null;
        this.Loading = false;
        alert('usuario invalido');
        if (error.response) {
            // here, you may want to drill even further to handle 400 and 500 level errors differently
            console.log(error.response);
        }
        else if (error.request) {
            // this will only be reached if the request didn't ever receive a response
            console.log(error.request);
        }
        else {
            // something in the setup of the request triggered an error
            console.log(error.message);
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player1{
display: inline-block;
vertical-align: center;
margin-right: 15px;
}
.cuadro{
  margin-top: 20px;
  width: 300px;
  height: 400px;
  color: black;
  background-color: white;
  display: inline-block;
  vertical-align: center;
  border-radius: 15px;
  font-size: 15px;
}
.cuadro img{
  width: 120px;
  border-radius: 60px;
}

</style>
