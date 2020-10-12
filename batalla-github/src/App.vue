<template>
  <div id="app">
    <img src="https://www.sferalabs.cc/wp-content/uploads/github-logo-white.png" width="200">
    <h1>GitHub Battle</h1>
    <div class="componentes">
      <HelloWorld user="Player 1"/>
      <HelloWorld user="Player 2"/>
    </div>
    <Batalla :winner="ganador"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Batalla from './components/Batalla.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Batalla
  },
  data(){
    return this.$store.state;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 40px;
}
html
body{
  background-color: black;
}
.componentes{
  display:inline-block;
  position:relative;
}
#hello{
  display: inline-block;
  vertical-align: center;
  margin: 20px;
}
#hello2{
  display: inline-block;
  vertical-align: center;
  margin: 20px;
}
p{
  position: static;
}
</style>
