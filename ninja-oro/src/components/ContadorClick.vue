<template>
  <div id="hi">
    <div class="oro">
      <h2>Tu oro: {{timesClicked}}</h2>
    </div>
    <div class="estacion1">
      <h3>Granja</h3>
      <p>Trabaja en la Granja y ganar Oro</p>
      <button v-on:click="respuestaClick1(20, 10,'Granja')">Buscar Oro</button>
    </div>
    <div class="estacion2">
      <h3>Cueva</h3>
      <p>Entra en la cueva y encuentra Oro</p>
      <button v-on:click="respuestaClick1(5, 10, 'Cueva')">Buscar Oro</button>
    </div>
     <div class="estacion3">
      <h3>Casa</h3>
      <p>Ve a casa a descanzar y gana Oro</p>
      <button v-on:click="respuestaClick1(2, 5, 'Casa')">Buscar Oro</button>
    </div>
    <div class="estacion4">
      <h3>Casino</h3>
      <p>Diviertete en el casino apostando tu Oro</p>
      <button v-on:click="respuestaClick1(-50, 50, 'Casino')">Buscar Oro</button>
    </div>
  </div>
</template>

<script>
import store from '@/store';

export default {
  name: 'ContadorClick',
  props:{
   timesClicked: Number
  },
  methods:{
    respuestaClick1(max,min,name) {
      store.incrementoclick(max,min);
      store.actividadesClick(name);
    }
  }
};
</script>
<style scoped>
.oro{
  margin-bottom: 30px;
}
h3{
  color:rgb(85, 85, 85);
}
.estacion1{
  display: inline-block;
  border: 1px solid #d8b108;
  width: 160px;
  height: 180px;
  padding: 10px;
  margin-left: 20px;
}
.estacion2{
  display: inline-block;
  border: 1px solid #d8b108;
  width: 160px;
  height: 180px;;
  padding: 10px;
  margin-left: 20px;
}
.estacion3{
  display: inline-block;
  border: 1px solid #d8b108;
  width: 160px;
  height: 180px;
  padding: 10px;
  margin-left: 20px;
}
.estacion4{
  display: inline-block;
  border: 1px solid #d8b108;
  width: 160px;
  height: 180px;
  padding: 10px;
  margin-left: 20px;
}
</style>