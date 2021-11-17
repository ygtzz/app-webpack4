var path = require('path');
var proxy = require('./proxy');
var glob = require('glob');
var sBase = './src/';

var entry = {};
glob.sync('./src/pages/**/index.ejs').forEach(function(item){
    if(item){
        let match = item.match(/\/pages\/(\w*)\//);
        if(match && match.length > 0){
            entry[match[1]] = item.replace('.ejs','.js')
        }
    }
});

console.log(entry);

module.exports = {
    sBase: sBase,
    sDist: path.resolve(__dirname, '../dist'),
    sDest: './dist',
    entry: entry,
    dev: {
        proxy: proxy,
        env: '',
        port: 8086,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},
    },
    pre: {
        
    },
    prod: {
        path: {
            script: 'static/scripts/',
            style: 'static/style/'
        }
    },
    enableRem: true,
    px2rem:{
        remUnit: 1,
        threeVersion:false,
        remVersion:true,
        baseDpr:2,
        remPrecision:6,
        dprList: [2,3]
    }
}