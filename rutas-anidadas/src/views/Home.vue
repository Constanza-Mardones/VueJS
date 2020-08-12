<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome"/>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br/>
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, <br/>
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
