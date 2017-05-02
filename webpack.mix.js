const { mix } = require('laravel-mix')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

mix.stylus('resources/styl/app.styl', 'assets/css')
   .js('resources/js/app.js', 'assets/js')
   .extract(['barba.js'])
   .sourceMaps()
   .webpackConfig({
     plugins: [
       new SWPrecacheWebpackPlugin({
         filepath: 'assets/service-worker.js',
         staticFileGlobs: [
           './assets/img/**.*',
           './assets/css/**/*.css',
           './assets/js/**/*.js'
         ],
         stripPrefix: '.'
       })
     ]
   })
   .browserSync({
     proxy: 'localhost:2368',
     files: [
       '*.hbs',
       'resources/**/*.js',
       'resources/**/*.styl'
     ],
     notify: false
   })
   .disableNotifications()
