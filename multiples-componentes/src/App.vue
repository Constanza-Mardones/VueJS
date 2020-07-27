<template>
  <div id="app">
    <img src="https://s3.amazonaws.com/tinycards/image/3e1981962fc8640613f87ed88fd217cb" width="200">
    <HelloWorld msg="Lista de Elementos"/>
    <h2>Subtitulo Lista...</h2>
    <lista></lista>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Lista from './components/Lista.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Lista
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
