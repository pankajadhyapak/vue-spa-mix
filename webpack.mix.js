let mix = require('laravel-mix');

mix.js('src/app.js', 'js')
    .extract([
        'vue',
        'jquery',
        'lodash',
        'popper.js',
        'bootstrap',
        'axios',
        'moment',
        'sweetalert',
        'vue-flatpickr-component',
        'vue-router',
        'vue-select',
        'nprogress'
    ])
    .sass('sass/app.scss', 'css')
    .setPublicPath('public/dist');
    //.version();
