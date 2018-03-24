<template>
    <div class="main">
        <agnav/>
        <transition name="fade" mode="out-in">
        <router-view/>
        </transition>
    </div>
</template>

<script>
    import agnav from './layout/nav';
    export default {
        metaInfo: {
            title: 'Welcome to my App'
        },
        name: 'App',
        components:{agnav}
    }
</script>