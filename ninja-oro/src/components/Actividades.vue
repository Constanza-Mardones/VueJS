<template>
  <div id="act">
      <h4>Actividades:</h4>
      <div class="cuadro">
          {{message}}
        <ul>
            <li v-for="(info, index) in texto" :msg="info" :key="index">
                {{info}}
            </li>  
        </ul>
      </div>
  </div> 
</template>

<script>
export default {
  name: 'Actividades',
  props: {
    message: Array
  },
  data(){
      return{
          texto:[]
      };
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
</style>