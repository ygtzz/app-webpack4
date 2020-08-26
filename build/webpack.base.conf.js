var webpack = require('webpack');
var config = require('./config');
var merge = require('lodash/merge');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
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
            {test: /\.(js|jsx)$/, loader: "babel-loader", exclude: /node_modules/},
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
        new VueLoaderPlugin(),
        new ContentInjectPlugin({
            contents:{
                content: 'this is inject content',
                rem: function(){
                    return fs.readFileSync('./src/static/js/rem.js',{encoding:'utf8'});
                },
                other: 'other file content'
            }
        }),
        new webpack.ProgressPlugin((percentage, message, ...args) => {
            if(percentage == 1){
                console.info(percentage, message, ...args);
                //copy files
            }
        })
    ],
    resolve:{
        modules: [ "node_modules",sBase,sBase+"pages", sBase+"widget",sBase+'mock'],
        extensions:['.vue','.js','.json'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}