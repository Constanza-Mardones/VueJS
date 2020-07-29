<template>
<div>
	<h3>{{ texto }}</h3>
    <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>

</div>
</template>
<script>
export default{
 name:'Lista',	
 props:{
    texto: String
 }	
};
</script>
<style scoped>
	h3 {
        margin: 40px 0 0;
    }
    a {
        color: #42b983;
    }          
</style>