<template>
  <div class="accion">
   <h2>Acción</h2>
    <ul>
        <li v-for="movie in actionMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Action",
    computed: {
      actionMovies() {
        return this.$store.state.movies.filter(movie => movie.genre === "Action");
      }
    }
  };
</script>
