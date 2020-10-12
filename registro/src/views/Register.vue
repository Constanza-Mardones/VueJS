<template>
  <div id="contenedor">
    <div class="registro">
      <Register/>
    </div>
    <div class="logear align-top" >
      <Login/> 
    </div>
  </div>
</template>

<script>
import Register from '@/components/RegisterComp.vue';
import Login from '@/components/LoginComp.vue';

export default {
  name: 'registro',
  components: {
    Register,
    Login
  }
}
</script>
<style>
#contenedor{
  width: 100%;
  height: 450px;
  margin-top: 100px;
  background-color: rgb(31, 206, 230);
}
.registro{
  display: inline-block;
  text-align: center;
  margin-top: 50px;
  margin-right: 50px;
  
}
.logear{
  display: inline-block;
  margin-top: 100px;
  text-align: center;
 
}
</style>