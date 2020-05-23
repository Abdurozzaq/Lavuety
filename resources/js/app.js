window.Vue = require('vue');

// For Vuetify
import vuetify from './vuetify'
import App from './App.vue'
// For Axios
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// For Router
import VueRouter from 'vue-router';
import { routes } from './Routes';


Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes
});
 
Vue.use(VueAxios, axios)

const app = new Vue({
    vuetify,
    render: h => h(App),
    el: '#app',
    router,
});