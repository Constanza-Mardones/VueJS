<template>
<div class="Lista">
  <ul>
    <li>{{contenido}}</li>
  </ul>
</div>
</template>

<script>
export default{
 name:'Lista',	
 props:{
    contenido: String
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