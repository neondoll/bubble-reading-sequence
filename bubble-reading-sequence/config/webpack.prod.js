const {merge} = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = require('./paths');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode        : 'production',
    devtool     : false,
    output      : {path: paths.main, publicPath: '/', filename: 'public/js/[name].[contenthash].bundle.js'},
    module      : {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use : [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {importLoaders: 2, sourceMap: false, modules: false}},
                    'postcss-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins     : [
        // Extracts CSS into separate files
        new MiniCssExtractPlugin({
            filename     : paths.main + '/public/css/[name].[contenthash].css',
            chunkFilename: '[id].css'
        })
    ],
    optimization: {
        minimize    : true,
        minimizer   : [new CssMinimizerPlugin(), '...'],
        runtimeChunk: {name: 'runtime'}
    },
    performance : {hints: false, maxEntrypointSize: 512000, maxAssetSize: 512000}
});