<template>
  <div id="app">
    <HelloWorld msg="Counter Game!"/>
    <Contador/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Contador
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  width: 1000 px;
  height: 400px;
  margin-top: 200px;
}
html,
body{
  margin:0px;
  background-color: rgb(66, 66, 66);
  padding: 0px;
}
</style>
