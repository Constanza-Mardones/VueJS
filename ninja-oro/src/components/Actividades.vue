<template>
  <div id="act">
      <h4>Actividades:</h4>
      <div class="cuadro">
        <ul>
          <li v-bind:class="{ verde: message > 0, rojo: message < 0 }"> {{message}} </li>
        </ul>  
      </div>
      <!-- ejercicio ninja-oro reset -->
      <div class="boton">
        <button v-on:click="reinicio()">Reiniciar</button>
      </div>
  </div> 
</template>

<script>
export default {
  name: 'Actividades',
  props: {
    message: Array
  },
  //ejercicio ninja-oror reset
  methods:{
    reinicio: function() {
     if (window.confirm('¿Estas seguro de reiniciar el juego? tu progreso se perdera')){
        window.open("exit.html", "Thanks for Visiting!");
      } 
    }
  }
};
</script>

<style>
  #act{
    display: inline-block;
  }
  h4{
    margin-top: 40px;
    margin-left: 20px;
    text-align: left;
  }
  .cuadro{
    margin-top: 10px;
    border: 1px solid #d8b108;
    width: 785px;
    height: 200px;
    display: inline-block;
    vertical-align: center;
    margin-left: 20px;
  }
  .boton{
    display: block;
    margin-top: 20px;
  }
  li{
   list-style-type: none;
  }
  .verde {
    color: green;
  }
  
  .rojo {
    color: red;
  }
</style>