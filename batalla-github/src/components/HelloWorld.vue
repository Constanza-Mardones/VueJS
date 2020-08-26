<template>
  <div id="hello">
    <h1>Welcome to GitHub Battle</h1>
    <div class='cuadro'>
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
      info: null
    };
  },
  mounted() {
    this.getBerryData();
  },
  methods: {
    async getBerryData() {
      try {
        let response = await this.$http.get("https://api.github.com/users/Constanza-Mardones");
        this.info = response.data;      // a lot more information comes back in the response, so for now we only want the actual data of the response
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
