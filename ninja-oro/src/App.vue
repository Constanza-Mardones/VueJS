<template>
  <div id="app">
    <HelloWorld msg="Ninja Gold"/>
    <img src="https://www.seekpng.com/png/full/121-1212467_gi-exhibit-ninjago-lego-com-gold-ninjago.png" width="65"/>
    <div class="lugares">
      <ContadorClick :timesClicked="timesClicked"/>
    </div>  
    <Actividades :message="informacion"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import ContadorClick from './components/ContadorClick.vue';
import Actividades from './components/Actividades.vue';
import store from '@/store';

export default {
  name: 'App',
  components: {
    HelloWorld,
    ContadorClick,
    Actividades
  },
  data(){
    return store.state;
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #d8b108;
    margin-top:50px;
  }
  .lugares{
    margin-top: 20px;
  }
</style>
