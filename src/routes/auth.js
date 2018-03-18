import  middleware from "../utils/middleware";

let routes = [
    {
        path: '/login',
        component: require("../pages/login"),
        beforeEnter:  middleware.guest
    }
];

export default routes;