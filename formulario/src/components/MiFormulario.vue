<template>
  <form action="" method="POST">
    <p>Nombre: <input type="text" v-model="nombre" ></p>
    <p>Ciudad: <input type="text" v-model="ciudad" ></p>
    <p>Lenguaje Favorito:
        <select v-model="categoria1" >
            <option value="1">JavaScript</option>
            <option value="2">Java</option>
            <option value="3">Phyton</option>
            <option value="4">Postre</option>
        </select>
    </p>
    <p>Descripción: <textarea v-model="descripcion" ></textarea></p>
    <p><input type="submit" value="enviar"></p>
 </form>
</template>

<script>
export default {
        name: "MiFormulario",
        data: function() {
            return {
                nombre: '',
                ciudad: '',
                descripcion: ''
            };
        }
    }
</script>