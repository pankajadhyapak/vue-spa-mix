import VueRouter from 'vue-router';
import dashboard from './dashboard';
import about from './auth';

let base = [
    {
        path: '/',
        component: require("../pages/Home")
    },
    {
        path: '/about',
        component: require("../pages/About")
    },
    {
        path: "*",
        component: require("../pages/PageNotFound")
    }
];
const routes = base.concat(dashboard, about);

export default new VueRouter({
    mode: 'history',
    //base: '/dashboard/',
    routes,
});
