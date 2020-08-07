<template>
  <div id="Hi">
    <a href="http://localhost:8080/#/">primero</a>
    <a href="http://localhost:8080/#/segundo">segundo</a>
    <a href="http://localhost:8080/#/tercero">tercero</a>
    <a href="http://localhost:8080/#/cuarto">cuarto</a>
    <a href="http://localhost:8080/#/error">quinto</a><br/>
    <h1>¡Bienvenidos a Dojo!</h1>
    <img src="https://dojokaio-ken.org/wp-content/uploads/2020/02/dojo-Kaio-ken_.png" width="300">
    <p>El término Dojo, puede referirse a:<br/>
    Dōjō, lugar de meditación y práctica del Budismo zen, <br/>
    y de las artes marciales tradicionales del Japón, o gendai budo. <br/>
    El cual fue adoptado en la práctica de muchas otras disciplinas, <br/>
    llamándolo Dojang, kwan, etc</p>
  </div>
</template>

<script>
export default {
  name: 'MenuPrincipal'
}
</script>

<style>
#Hi {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
img{
  margin-top: 30px;
}
p{
  margin-top: 50px;
}
a{
  margin-left: 20px;
}
</style>
