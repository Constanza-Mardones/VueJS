<template>
<div class="List">   
  <ul>
    <li v-for="(contenido, index) in mensajes" :msg="contenido" :key="index">
    {{contenido}}
    </li>
  </ul>
</div>  
</template>

<script>
export default{
 name:'Lists',	
 props:{
    contenido:String
 },
 data(){
    return{
      mensajes:['Texto', 'Texto1', 'Texto2']
    };
  }	
};
</script>
<style>
	h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    a {
        color: #42b983;
    }   
</style>