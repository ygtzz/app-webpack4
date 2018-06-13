var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');
var ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var merge = require('webpack-merge');
var WebpackChunkHash = require('webpack-chunk-hash');
var MiniCssExtractPlugin = require("mini-css-extract-plugin") 
var baseWebapckConfig = require('./webpack.base.conf');
var config = require('./config');

var oEntry = baseWebapckConfig.entry,
    aEntry = Object.keys(oEntry);

var aPlugin = [
    // new webpack.optimize.CommonsChunkPlugin({
    //     names: ['common','vendor'],
    //     minChunks: 2
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     }
    // }),
    // new ExtractTextPlugin({
    //     filename: config.prod.path.style + '[name].[contenthash:8].css',
    //     allChunks: true
    // }),
    new MiniCssExtractPlugin({
    　　filename: config.prod.path.style + "[name].[chunkhash:8].css",
    　　chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        __DEV__: JSON.stringify(JSON.parse('false'))
    }),
    new LodashModuleReplacementPlugin(),
    new AssetsPlugin({
      filename: config.sDest + '/map.json',
      prettyPrint: true,
      includeManifest: false
    }),
    // 与MiniCssExtractPlugin冲突
    // new ChunkManifestPlugin({
    //   filename: "chunk-manifest.json",
    //   manifestVariable: "webpackManifest"
    // }),
    new webpack.HashedModuleIdsPlugin(),    
    new WebpackChunkHash()
];

//html webpack
aEntry.forEach(function(item) {
    aPlugin.push(new HtmlWebpackPlugin({
        filename: item + '.html',
        template: config.sBase + 'pages/' + item + '/' + item + '.ejs',
        chunks: [item, 'vendor', 'common'],
        inject: 'body',
        title: item + 'Page',
        minify: {
            removeComments: false,
            collapseWhitespace: false,
            removeAttributeQuotes: true
        },
        chunksSortMode: 'dependency'
    }));
});

module.exports = merge(baseWebapckConfig, {
    mode: 'production',
    entry: {
        vendor: ['vue', 'vuex', 'vue-router', 'vuex-router-sync','vue-resource']
    },
    output: {
        path: config.sDist,
        filename: config.prod.path.script + '[name].[chunkhash:8].js',
        chunkFilename: config.prod.path.script + "[name].[chunkhash:8].js"
    },
    module: {
        rules: [
            {   
                test: /\.vue$/, loader: 'vue-loader',
                options:{
                    loaders: {
                        // MiniCssExtractPlugin.loader,
                        css: "vue-style-loader!css-loader!postcss-loader",
                        sass: "vue-style-loader!css-loader!postcss-loader!sass-loader",
                        scss: "vue-style-loader!css-loader!postcss-loader!sass-loader"
                        // css: ExtractTextPlugin.extract({
                        //     use:[
                        //         {loader:'css-loader'},
                        //         {loader:'postcss-loader'}
                        //     ],
                        //     fallback:[
                        //         {loader:'style-loader'}
                        //     ]
                        // }),
                        // sass: ExtractTextPlugin.extract({
                        //     use:[
                        //         {loader:'css-loader'},
                        //         {loader:'postcss-loader'},
                        //         {loader:'sass-loader'}
                        //     ]
                        // }),
                        // scss: ExtractTextPlugin.extract({
                        //     use:[
                        //         {loader:'css-loader'},
                        //         {loader:'postcss-loader'},
                        //         {loader:'sass-loader'}
                        //     ]
                        // })
                    }
                }
            },
            // {
            //     test: /\.css$/, 
            //     use: ExtractTextPlugin.extract({
            //         use:[
            //             {loader:'css-loader'},
            //             {loader:'postcss-loader'}
            //         ],
            //         fallback:[
            //             {loader:'style-loader'}
            //         ]
            //     })
            // },
            // {
            //     test: /\.scss$/, 
            //     use: ExtractTextPlugin.extract({
            //         use:[
            //             {loader:'css-loader'},
            //             {loader:'postcss-loader'},
            //             {loader:'sass-loader'}
            //         ]
            //     })
            // },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // { loader: 'style-loader'},
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        } 
                    },
                    { loader: 'postcss-loader'}
                ]
            },
            {
                test: /\.scss$/, 
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    // { loader: 'style-loader' },
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        } 
                    },
                    { loader: 'postcss-loader'},
                    { loader: 'sass-loader' }
                ]
            },
            // {
            //     test: /\.(svg)(\?.*)?$/,
            //     loader:'url',
            //     options: {
            //         limit: 2048,
            //         name: '/static/images/[name].[ext]'
            //     }
            // },
            {
                test: /\.(png|jpe?g|gif)(\?.*)?$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:2048,
                            name:'/static/images/[name].[ext]'
                        }
                    },
                    // {
                    //     loader:'image-webpack-loader',
                    //     options:{
                    //         mozjpeg: {
                    //             quality: 65
                    //         },
                    //         pngquant:{
                    //             quality: "65-90",
                    //             speed: 4
                    //         },
                    //         svgo:{
                    //             plugins: [
                    //                 {
                    //                 removeViewBox: false
                    //                 },
                    //                 {
                    //                 removeEmptyAttrs: false
                    //                 }
                    //             ]
                    //         }
                    //     }
                    // }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: 'vender',   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名    
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10    
                },
                common: { // 抽离自己写的公共代码，utils这个名字可以随意起
                    chunks: 'initial',
                    name: 'common',  // 任意命名
                    minSize: 0    // 只要超出0字节就生成一个新包
                }
            }
        }
    },
    plugins: aPlugin,
    // devtool: 'cheap-module-source-map'
});