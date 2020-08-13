<template>
    <div class="hello">
      <p>{{ count }}</p>
      <button v-on:click="respuestaClick()" v-on:mouseover="otroEvento()">Click Me!</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      respuestaClick() {
        this.$store.commit('increment')
      },
      otroEvento() {
        this.$store.commit('increment')
      }
    }
  }
</script>