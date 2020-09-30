<template>
    <div class="terminar">
        <b-button v-on:click="CloseUser" size="sm" class="btn btn-info ml-2">Cerrar Sesión</b-button>
    </div>
</template>
<script>
import * as firebase from 'firebase/app';
export default {
    name:'terminar',
    data(){
        return{

        }
    },
    methods: {
        async CloseUser() {
            try{
                const data = await firebase.auth().signOut();
                console.log(data);
                this.$router.replace({name:"register"});
           }
           catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
<style >
.terminar{
    text-align: right;
    padding: 20px;
}
</style>