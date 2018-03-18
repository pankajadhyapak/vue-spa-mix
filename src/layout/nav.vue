<template>
    <nav class="navbar navbar-expand-md navbar-light navbar-laravel mb-5">
        <div class="container">
            <router-link
                    class="navbar-brand"
                    to="/">
                Sample App
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>

                    <li class="nav-item" v-if="authCheck">
                        <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>


                <ul class="navbar-nav ml-auto">
                    <template v-if="authCheck">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Pankaj <span class="caret"></span>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#" @click.prevent="logout()">
                                    Logout
                                </a>
                            </div>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                        <!--<li class="nav-item">-->
                            <!--<router-link class="nav-link" to="/register">Register</router-link>-->
                        <!--</li>-->
                    </template>
                </ul>
                <!-- Right Side Of Navbar -->
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'agnav',
        methods:{
            logout(){
                localStorage.removeItem("token");
                window.location = "/";
            }
        }
    }
</script>