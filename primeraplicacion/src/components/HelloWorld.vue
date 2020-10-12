<template>
  <b-container>
    <!-- <input type="email" v-model="email" placeholder="Ingrese email" required> <br>
    <input type="password" v-model="password" placeholder="Ingrese password" required> <br>
    <button @click="login"> login </button> -->

    <!-- <button @click="newUser">crear</button> <br> -->

    <!-- <input type="text" v-model="id" placeholder="Ingrese id" required> <br>
    <button @click="deleteOne">eliminar</button> <br> -->
    <div class="hello">
      <b-table striped :items="series" :fields="encabezado">

        <template v-slot:cell(Nombre)="tv">
          <router-link :to="{name:'About', params: {id :tv.item.id} }">{{tv.value}}</router-link>
        </template>

        <template v-slot:cell(Acciones)="action">
          <router-link :to="{name:'Edit', params: {id :action.item.id} }">Editar</router-link>
          <b-button size="sm" @click="deleteOne(action.item.id)" class="ml-2">Eliminar</b-button>
        </template>
      </b-table>

    </div>
    <!-- <div class="formulario">
      <input type="text" v-model="Nombre" label="Nombre:" placeholder="Nombre de Serie" required> <br>
      <input type="text" v-model="Canal" label="Canal:" placeholder="Nombre de Canal" required> <br>
      <input type="text" v-model="Géneros" label="Géneros:" placeholder="Géneros de la Serie" required> <br>
      <input type="text" v-model="Temporadas" label="Temporadas:" placeholder="Número de Temporadas" required> <br>

      <button @click="newUser">crear</button> <br>
    </div>  -->
  </b-container>
</template>

<script>
import { db } from '../firebase';  
export default {
  name: 'HelloWorld',
  data(){
    return { 
      encabezado:[ {key:'Nombre', sortable: true}, 'Canal', 'Temporadas', 'Emisión', 'Géneros', 'Acciones'],
    }
  },
  firestore(){
    return {
      series: db.collection('series')
    }
  },
  methods: {
    async deleteOne(showsId) {
      try {
        db.collection("series").doc(showsId).delete();
      }
      catch (error) {
        console.log(error);
      }
      this.id=''
    },
    // login(){
    //   if(this.email != "" && this.password!="" ){
    //     console.clear()
    //     console.log('paso el login')
    //     this.viewOne()
    //   }else{
    //     alert('ingrese campos obligatorios')
    //   }
    // },
    // async viewOne() {
    //   console.log('dentro de viewOne')
    //   try {
    //     let show = await db.collection("series").doc(this.id).get();
    //     console.log(show);
    //     if(show.exists){
    //       // alert('usuario existe')
    //       this.$router.push({
    //         name: 'About'
    //       })
    //     }
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // },
    // newUser(){
    //   // add item to db
    //   db.collection("series").add({
    //   // email: this.email,
    //   // contraseña: this.password,
    //     Nombre: this.Nombre,
    //     Canal: this.Canal,
    //     Temporadas: this.Temporadas,
    //     Emisión: this.Emisión,
    //     Géneros: this.Géneros,
    //  });
    //   // reset values
    //   // this.email = "";
    //   // this.password = "";
    //   this. Nombre="";
    //   this. Canal="";
    //   this. Temporadas="";
    //   this. Emisión="";
    //   this. Géneros="";
    // },
    
  }
}
</script>

<style>
.hello{
  margin-top: 30px;
}

</style>
