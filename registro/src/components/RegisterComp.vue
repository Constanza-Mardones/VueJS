<template>
    <b-container>
        <div class="registro">
            <h1>Crear Cuenta</h1><br>
            <b-row class="ml-5 mt-2">
                <b-col sm="4">
                    <label for="input-small">Nombre: </label>
                </b-col>
                <b-col sm="8">
                    <b-form-input v-model="nombre" id="nombre" type="text" size="sm" placeholder="Complete con su nombre"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="ml-5 mt-2">
                <b-col sm="4">
                    <label for="input-small">Email: </label>
                </b-col>
                <b-col sm="8">
                    <b-form-input v-model="email" id="email" type="text" size="sm" placeholder="Agrege un correo valido"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="ml-5 mt-2">
                <b-col sm="4">
                    <label for="input-small">Contraseña</label>
                </b-col>
                <b-col sm="8">
                    <b-form-input v-model="password" id="password" type="password" size="sm" placeholder="Agrege su contraseña"></b-form-input>
                </b-col>
            </b-row>
            <img v-if="cargar" src="https://www.drogomedia.com/img/loading.gif" width="150">
            <b-button v-on:click="registroUser" size="sm" class="ml-3 mt-3" >Registrarse</b-button>
        </div>
    </b-container>
</template>
<script>
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import "firebase/auth";

export default {
    name: "register",
    data() {
        return {
            nombre:'',
            email:'',
            password:'',
            cargar: false,
        }
    },
    methods:{
        async registroUser() {
            try{
                this.cargando = true;
                const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                console.log(user);
                this.cargando = false
                this.$router.replace({name:"secret"});
           }
           catch (error) {
                console.log(error);
            }
        }
    }
    
}
</script>
<style scoped>

</style>