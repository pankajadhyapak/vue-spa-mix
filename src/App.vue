<template>
    <div class="main">
        <agnav/>
        <router-view/>
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