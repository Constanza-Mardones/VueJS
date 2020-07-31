<template>
  <div class="hi">
    <p>{{contador}}</p>
    <button v-on:click="respuestaClick()" v-on:mouseover="otroEvento()">Click Me!</button>
  </div>
</template>

<script>
export default {
  name: 'Contador',
  data(){
    return{
        contador:0
    };
  },
  methods:{
    respuestaClick() {
        //salto de linea
        this.contador++;
    },
    otroEvento(){
        this.contador++;
    }
  }
}
</script>