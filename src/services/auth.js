export default {
    check() {
        return !! localStorage.token;
    },
    getToken(){
        return localStorage.token;
    }
}