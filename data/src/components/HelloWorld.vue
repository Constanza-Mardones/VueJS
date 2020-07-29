<template>
  <div class="hello">
    <h3>{{ titulo }}</h3>
    <li>{{ msg }}</li>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    props: {
      titulo:String,
      msg: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 20px 0 0;
}
a {
  color: #42b983;
}
</style>
