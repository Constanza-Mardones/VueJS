<template>
    <b-container>
        <div class="login">
            <h1>Iniciar Sesión</h1><br>
            <b-row class="ml-5 mt-2">
                <b-col sm="4">
                    <label for="input-small">Email: </label>
                </b-col>
                <b-col sm="8">
                    <b-form-input v-model="correo" id="e-mail" type="text" size="sm" placeholder="Agrege correo valido"></b-form-input>
                </b-col>
            </b-row>
            <b-row class="ml-5 mt-2">
                <b-col sm="4">
                    <label for="input-small">Contraseña</label>
                </b-col>
                <b-col sm="8">
                    <b-form-input v-model="contraseña" id="pass" type="password" size="sm" placeholder="Agrege contraseña"></b-form-input>
                </b-col>
            </b-row>
            <img v-if="cargando" src="https://www.drogomedia.com/img/loading.gif" width="150"><br>
            <b-button v-on:click="loginUser" size="sm" class="ml-3 mt-2">Iniciar Sesión</b-button>
        </div>
    </b-container>
</template>
<script>
// import * as firebase from 'firebase/app';
import firebase from 'firebase/app'
import "firebase/auth";

export default {
    name: "login",
    data() {
        return {
            correo:'',
            contraseña:'',
            cargando: false,
        }
    },
    methods:{
        async loginUser() {
            try{
                this.cargando = true;
                const usuario = await firebase.auth().signInWithEmailAndPassword(this.correo, this.contraseña)
                console.log(usuario);
                this.cargando = false;
                this.$router.replace({name:"secret"});
           }
           catch (error) {
                console.log(error);
                this.cargando = false;
            }
        }
    }
    
}
</script>
<style scoped>

</style>