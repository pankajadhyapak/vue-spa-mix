/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import router from './routes';
import NProgress from 'nprogress';
import Meta from 'vue-meta'

Vue.use(VueRouter);
Vue.use(Meta);
window.eventHub = new Vue();

router.beforeEach(function (to, from, next) {
    NProgress.start();
    next();
});

router.afterEach(function () {
    NProgress.done();
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/Example.vue'));

import App from './App.vue';
import authService from './services/auth';

Vue.mixin({
    data(){
        return {
            authCheck: authService.check()
        }
    }
});

const app = new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
});