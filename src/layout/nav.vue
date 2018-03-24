<template>
    <nav class="navbar navbar-expand-md navbar-light appbar mb-5">
        <div class="container-fluid">
            <router-link
                    class="navbar-brand"
                    to="/">
                AcadGild
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
                                <span class="avatar">P</span>
                                <span class="caret"></span>
                            </a>
                            <ul role="menu" class="dropdown-menu user-nav">
                                <li class="dropdown-header">Settings</li>
                                <li>
                                    <router-link
                                            to="/settings"
                                            class="dropdown-item">
                                        <i class="fa fa-fw fa-btn fa-cog"></i>
                                        Settings</router-link>
                                </li>
                                <li class="dropdown-divider"></li>
                                <li>
                                    <a class="dropdown-item" href="#" @click.prevent="logout()">
                                        <i class="fa fa-fw fa-btn fa-sign-out"></i>Logout Pankaj
                                    </a>
                                </li>
                            </ul>
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
                window.location = "/login";
            }
        }
    }
</script>
