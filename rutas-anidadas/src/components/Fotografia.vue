<template>
    <div id="componente">
        <h3>fotografias {{ $route.params.foto }}</h3>
        <h3>fotografias {{ $route.params.info }}</h3>
    </div>
</template>
<script>
export default {
    name: 'Fotografia'
}
</script>