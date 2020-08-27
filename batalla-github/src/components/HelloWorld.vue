<template>
  <div id="hello">
    <h1>Welcome to GitHub Battle</h1>
    <p>Look up by id: <input v-model="nombre" placeholder="nombre de usuario"/><button @click="updateResults">Buscar</button></p>
    <div v-if="info != null" class='cuadro'>
      <h2>Player 1</h2>
      <p>Username: {{ info.login }}</p>
      <p>Public Repositories: {{ info.public_repos }}</p>
      <p>Number of Followers: {{ info.followers }}</p>
      <p>Number of Following: {{ info.following }}</p>
      <p>Public Gists: {{ info.public_gists }}</p>
      <h3>Total Score: {{  info.public_repos + info.followers + info.following + info.public_gists}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      info: null,
      nombre: '',
    };
  },
  mounted() {
    this.getBerryData();
  },
  methods: {
    updateResults() {
      this.getBerryData();
    },
    async getBerryData() {
      try {
        let response = await this.$http.get(`https://api.github.com/users/${this.nombre}`);  // instead of hardcoding a value, let's use whatever has been typed in the input box
        this.info = response.data;
      }
      catch(error) {
        console.log(`Something went wrong: ${error}`);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cuadro{
  width: 300px;
  height: 260px;
  color: black;
  background-color: white;
  display: inline-block;
  vertical-align: center;
  border-radius: 10px;
  font-size: 15px;
}
</style>
