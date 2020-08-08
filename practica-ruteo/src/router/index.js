import Vue from 'vue';
import VueRouter from 'vue-router';
    
import MenuPrincipal from '../components/MenuPrincipal'; 
import Segundo from '../components/Segundo';
import Tercero from '../components/Tercero';
import Cuarto from '../components/Cuarto';
import HelloWorld from '../components/HelloWorld';
Vue.use(VueRouter);    // instalamos explícitamente el router
    
export default new VueRouter({
    routes: [
        {
            path: '/', 
            component: MenuPrincipal
        },
        {
            path:'/segundo',
            component: Segundo
        },
        {
            path:'/tercero',
            component: Tercero,
        },
        {
            path:'/cuarto',
            component: Cuarto
        },
        {
            path: '/error',
            component: HelloWorld
        }
    ]
})