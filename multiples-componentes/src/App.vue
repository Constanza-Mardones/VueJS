<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld texto="Listas"/> 
    <Lista v-for="(contenido, index) in mensajes" v-bind:msg="contenido" v-bind:key="index"/>
    <HelloWorld otrotexto="N°1"/>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    <HelloWorld otrotexto="N°2"/>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
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
  data(){
    return{
      mensajes:['mensaje1', 'mensaje2']
    };
  }
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
