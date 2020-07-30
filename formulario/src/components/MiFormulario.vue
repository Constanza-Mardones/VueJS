<template>
  <form action="" method="POST">
    <p>Nombre: <input type="text" v-model="nombre" ></p>
    <p>Ciudad:
        <select v-model="categoria" >
            <option value="1">Temuco</option>
            <option value="2">Osorno</option>
            <option value="3">Santiago</option>
            <option value="4">Valdivia</option>
        </select>
    <p>Lenguaje Favorito:
        <select v-model="categoria1" >
            <option value="1">JavaScript</option>
            <option value="2">Java</option>
            <option value="3">Phyton</option>
            <option value="4">Postre</option>
        </select>
    </p>
    <p>Descripción: <textarea v-model="desc" ></textarea></p>
    <p><input type="submit" value="enviar"></p>
 </form>
</template>

<script>
export default {
        name: "MiFormulario",
        data: function() {
            return {
                nombre: '',
                precio: 0,
                categoria: 2,
                desc: 'Descripción por defecto'
            };
        }
    }
</script>