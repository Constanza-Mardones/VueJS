<template>
  <div class="hi">
    <h1>{{ mensaje }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Nuevo',
  props: {
    mensaje: String
  }
}
</script>