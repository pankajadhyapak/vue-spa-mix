import authService from '../services/auth';

export default {
    guest (to, from, next) {
        next(!authService.check() ? true : {
            path: '/',
            query: {
                redirect: to.name
            }
        })
    },
    auth (to, from, next) {
        next(authService.check() ? true : {
            path: '/login',
            query: {
                redirect: to.name
            }
        })
    }
}