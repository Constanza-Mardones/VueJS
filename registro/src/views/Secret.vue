<template>
  <div class="secret">
    <div class="cerrar">
      <Close/>
    </div>  
    <h3>Bienvenido!</h3>
    <SecretComp :comentarios="coment"/>
  </div>
</template>
<script>
import SecretComp from '@/components/SecretComp.vue';
import Close from '@/components/CloseUser.vue';

export default {
  name: 'secret',
  components: {
    SecretComp,
    Close
  },
  data() {
    return this.$store.state;
  },
}
</script>
<style>

</style>