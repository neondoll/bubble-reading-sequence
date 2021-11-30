const mix = require('laravel-mix');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const path = require('path')
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .sourceMaps(false);
mix.options({
    hmrOptions: {
        host: 'localhost',
        port: 3000
    },
});
mix.webpackConfig({
    devServer: {
        proxy: {
            '/': {
                target: 'http://localhost:8000',
            },
        }
    },
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources'),
        }
    },
    optimization: {
        splitChunks: {
            // include all types of chunks
            chunks: 'all',
        },
    },
});
mix.extract();
mix.disableNotifications();
mix.version();
