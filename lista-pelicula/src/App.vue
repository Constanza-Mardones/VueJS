<template>
  <div id="app">
    <img src="https://www.bolsamania.com/mejoresprestamos/wp-content/uploads/2014/01/PRESTAMOS9-300x246.png" width="200">
    <h1>Peliculas</h1>
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/home">Acción</router-link> |
      <router-link to="/about">Familiar</router-link> |
      <router-link to="/comedy">Comedia</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
