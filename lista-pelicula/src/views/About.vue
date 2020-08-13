<template>
  <div class="about">
    <h2>Familiar</h2>
    <ul>
        <li v-for="movie in familyMovies" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>
<script>
    export default {
        name: "Family",
        computed: {
            familyMovies() {
            return this.$store.state.movies.filter(movie => movie.genre === "Family");
            }
        }
    };
</script>
