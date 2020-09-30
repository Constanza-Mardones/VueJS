<template>
    <b-container>
            <div class="hola">
                <b-row>
                    <b-col sm="2">
                        <label for="textarea-default">escribe nuevo post</label>
                    </b-col>
                    <b-col sm="7">
                        <b-form-textarea
                            id="textarea-default"
                            v-model="texto"
                            size="sm"
                            placeholder="Escriba aqui"
                        ></b-form-textarea>
                    </b-col>
                </b-row>
            </div>
    </b-container>
</template>
<script>
import { db } from '../firebase';  
//import firebase from 'firebase/app';  
import "firebase/auth";

export default {
    name: "secretComp",
    data() {
        return {
            texto:'',
            user: null
        }
    },
    
    methods:{
        newPost(){
            db.collection("post").add({
                //usuario:this.usuario,
                texto:this.texto,
                //fecha:this.fecha,
                like:0
            });
            this.texto="";
        }
    },
}
</script>
<style scope>
.hola{
    margin-top: 20px;
    margin-left:120px;
}
</style>