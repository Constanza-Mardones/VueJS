<template>
    <b-container>
        <div class="hola">
            <b-row>
                <b-col sm="2">
                    <label for="textarea-small">escribe nuevo post</label>
                </b-col>
                <b-col sm="8">
                    <b-input-group prepend="Username" class="mt-3">
                        <b-form-input v-model="usuario"></b-form-input>
                    </b-input-group>
                    <b-form-textarea
                        id="textarea-small"
                        v-model="texto"
                        size="sm"
                        placeholder="Escriba aqui"
                     ></b-form-textarea>
                      <b-button @click="guardar" variant="info">Crear</b-button>
                </b-col>
            </b-row>
            <div v-for="(items, index) in comentarios" :key="index">
                <coment :comentario="items" :id="index"/>
            </div>
        </div>
    </b-container>
</template>
<script>
// import { db } from '../firebase';  
//import firebase from 'firebase/app';  
import "firebase/auth";
import coment from '@/components/comentComp.vue';

export default {
    name: "secretComp",
    components: {
        coment
    },
    props:{
        comentarios:Array
    },
    data() {
        return {
            texto:'',
            usuario: ''
        }
    },
    
    methods:{
        guardar(){
            let datos = {user: this.usuario, text: this.texto};
            console.log(datos);
            this.$store.commit('newPost', datos.data);
            this.usuario = '';
            this.texto = '';
        }
    }
}
</script>
<style scope>
.hola{
    margin-top: 20px;
    margin-left:120px;
}
</style>