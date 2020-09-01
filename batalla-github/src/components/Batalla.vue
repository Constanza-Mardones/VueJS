<template>
<div id='info'>
    <button v-on:click="combate">Batalla</button>
    <p>{{winner}}</p>
</div>
</template>

<script>
// import store from '@/store/index'
export default {
    name:'Batalla',
    props:{
        winner: String
    },
    methods:{
        combate() {
            this.$store.commit('batalla');
        }
    }
}
</script>

<style scoped>
button{
    display: block;
    margin-top: 20px;
    margin-left: 640px;
}
#info{
    color: white;
}
</style>