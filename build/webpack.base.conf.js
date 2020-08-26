var webpack = require('webpack');
var config = require('./config');
var merge = require('lodash/merge');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var AutoDllPlugin = require('autodll-webpack-plugin');
var path = require('path');
var sBase = config.sBase;
var fs = require('fs');
var ContentInjectPlugin = require('./contentInjectPlugin');

process.noDeprecation = true;
module.exports = {
    entry: config.entry,
    output: {
        path: config.sDist,
        filename: '[name].js',
        chunkFilename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },
            {test: /\.(html)$/, loader: 'html-loader'},
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name:'/static/fonts/[name].[ext]'
                }
            }
        ]
    },
    plugins: [
        //与html-webpack-plguin4.x无法配合
        // new AutoDllPlugin({
        //     debug: true,
        //     inject: true, 
        //     filename: '[name].dll.js',
        //     context: path.join(__dirname, '..'),
        //     path: './static/scripts',
        //     entry: {
        //       vendor: ['vue', 'vuex', 'vue-router', 'vuex-router-sync','vue-resource']
        //     }
        // }),
        //依赖于html-webpack-plguin版本
        // new ContentInjectPlugin({
        //     contents:{
        //         rem: function(){
        //             return fs.readFileSync('./src/static/js/rem.js',{encoding:'utf8'});
        //         }
        //     },
        //     replaceMode: 'all',
        //     memo: true
        // }),
        new VueLoaderPlugin()
    ],
    resolve:{
        modules: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['.vue','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}