<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld texto="Listas"/> 
    <HelloWorld otrotexto="N°1"/>
    <Lista contenido=""/>
    <HelloWorld otrotexto="N°2"/>
    <Lista contenido2=""/>
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
  },
 };
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
