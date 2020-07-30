<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Contador de Click"/>
    <Nuevo></Nuevo>
    <button v-on:click="respuestaClick()">Click Me!</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Nuevo from '/components/Nuevo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Nuevo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
