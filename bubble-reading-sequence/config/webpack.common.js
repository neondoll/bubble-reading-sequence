const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths')

module.exports = {
    // Where webpack looks to start building the bundle
    entry: [paths.resources + '/js/index.js'],

    // Where webpack outputs the assets and bundles
    output: {path: paths.main, publicPath: '/', filename: 'public/js/[name].bundle.js'},

    // Customize the webpack build process
    plugins: [
        // Removes/cleans build folders and unused assets when rebuilding
        //new CleanWebpackPlugin(),

        // Copies files from target to destination folder
        new CopyWebpackPlugin({
            patterns: [
                {
                    from            : paths.resources + '/assets',
                    to              : paths.public,
                    globOptions     : {ignore: ['*.DS_Store']},
                    noErrorOnMissing: true
                }
            ]
        }),

        // Generates an HTML file from a template
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            //favicon : paths.public + '/images/favicon.png',
            template: paths.resources + '/layouts/template.html', // template file
            filename: 'index.html' // output file
        })
    ],

    // Determine how modules within the project are treated
    module: {
        rules: [
            // JavaScript: Use Babel to transpile JavaScript files
            {test: /\.js$/, use: ['babel-loader']},

            // Images: Copy image files to build folder
            {test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource'},

            // Fonts and SVGs: Inline files
            {test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline'}
        ]
    },

    resolve: {
        modules   : [paths.resources, 'node_modules'],
        extensions: ['.js', '.jsx', '.json'],
        alias     : {'@': paths.resources, assets: paths.resources + '/assets'}
    }
};