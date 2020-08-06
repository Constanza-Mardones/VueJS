<template>
  <div class="hi">
    <!-- <button v-on:click="mostrarNinja()" > Mostrar Ninja </button> -->
    <button v-on:click="alertar(texto)" @click="mostrarNinja()"> Mostrar Ninja </button>
    <!-- <button v-on:click="mostrarGato()"> Mostrar Gato </button> -->
    <button v-on:click="alertar()" @click="mostrarGato()"> Mostrar Gato </button>
   <img :src='image' />
    
  </div>
</template>

<script>
export default {
  name: 'Boton',
  data() {
      return{
        ninja:"https://media.cdnandroid.com/18/ee/a7/3f/imagen-ninja-unseen-0thumb.jpg",
        gato:"https://i.pinimg.com/originals/7a/d5/1e/7ad51e0c5b557a3d9d46bf0e4dfff9d3.png",
        image:null
    }
  },
  
  methods: {
    alertar:function (texto) {
      alert(texto)
    },
    mostrarNinja:function(){
        this.image=this.ninja;
    },
    mostrarGato: function(){
        this.image=this.gato;
    }
  },
  created(){
      this.image=this.ninja;
      console.log('created')
  },
  mounted(){
      console.log('mounted')
  },
  beforeUpdate(){
    //al detectar un cambio
    console.log('beforeUpdate')
  },
  updated(){
    //al realizar los cambios
    console.log('updated')
  },
}
</script>
<style scoped>
button{
  margin: 50px;
}
img{
    display:block;
    margin-left: 580px;
    width: 200px;
}
</style>