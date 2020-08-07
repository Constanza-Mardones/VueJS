<template>
    <div id="contenido">
        <a href="http://localhost:8080/#/">primero</a>
        <a href="http://localhost:8080/#/segundo">segundo</a>
        <a href="http://localhost:8080/#/tercero">tercero</a>
        <a href="http://localhost:8080/#/cuarto">cuarto</a>
        <a href="http://localhost:8080/#/error">quinto</a><br/>
        <img src="https://dojokaio-ken.org/wp-content/uploads/2020/02/dojo-Kaio-ken_.png" width="300">
        <h2>Inicia Sesion</h2>  
        <div class="login" >
            <label for="uname"><b> Nombre </b></label>
            <input type="text"  name="uname" required> <br/>
            <br/>
            <label for="psw"><b> Contraseña </b></label>
            <input type="password" name="psw" required><br/>
            <br/> 
            <button onclick="login()" id="botonlog">Iniciar Sesion</button>
        </div>
    </div>
</template>

<script>
 export default {
        name: "Segundo"
    }
</script>

<style scoped>
#contenido{
    text-align: center;
}
.login{
    text-align: left;
    margin-left: 550px;
    margin-top: 20px;
}
button{
    margin-left: 50px;
}
h2{
    margin-left: 35px;
    margin-top: 20px;
}
</style>
