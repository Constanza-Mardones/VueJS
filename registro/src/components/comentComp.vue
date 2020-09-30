<template>
    <div>
        <h5>{{comentario.fecha}}</h5>
        <h4>{{comentario.usuario}}</h4>
        <p>{{comentario.texto}}</p>
        <button @click="aumentar">{{comentario.like}} Likes</button>
    </div>
</template>
<script>
export default {
    name: "secretComp",
    props:{
        comentario:Object,
        id:Number
    },
    methods:{
        aumentar(){
            this.$store.commit('aumentarLike', this.id);
        }
    }
}
</script>
<style>

</style>