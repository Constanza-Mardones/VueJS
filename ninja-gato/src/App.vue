<template>
  <div id="app">
    <HelloWorld msg="Ninja o Gato"/>
    <Boton/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Boton from './components/Boton.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Boton
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
