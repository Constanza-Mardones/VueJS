<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld titulo="Tech"/>
    <HelloWorld v-for="(content, index) in messages" :msg="content" :key="index"/>
    <HelloWorld titulo="Financial"/>
    <HelloWorld v-for="(content, index) in messages2" :msg="content" :key="index"/>
  </div>
</template>

<script>
 import HelloWorld from './components/HelloWorld.vue';
 export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      messages: ['HTML', 'CSS','Vue'],
      messages2: ['Investing', 'Budgeting','Balancing a checkbook']
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
