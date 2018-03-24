import middleware from '../utils/middleware'

let routes = [
    {
        path: '/dashboard',
        component: require("../pages/Dashboard"),
        beforeEnter: middleware.auth,
        meta: {title: 'Dashboard'}
    }
];

export default routes;
