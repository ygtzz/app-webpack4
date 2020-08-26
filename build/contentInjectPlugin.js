const HtmlWebpackPlugin = require('html-webpack-plugin');

let defaultOptions = {
    memo: true,
    replaceMode: 'all'
}

function ContentInjectPlugin(options) {
    // Configure your plugin with options...
    this.options = options;
    this.memo = {};
}

ContentInjectPlugin.prototype.apply = function(compiler) {
    compiler.hooks.compilation.tap('ContentInjectPlugin', compilation => {
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
            'ContentInjectPlugin',
            (htmlPluginData, callback) => {
                let html = htmlPluginData.html
                let options = Object.assign({},defaultOptions,this.options);
            
                if (options &&  options.contents) {
                    let {replaceMode,memo,contents} = options;
                    let contentKeys = Object.keys(contents);
                    
                    contentKeys.forEach(key => {
                        let target = replaceMode == 'all' ? new RegExp('{{{__'+key+'__}}}','g') : '{{{__'+key+'__}}}';
                        let content;
                        if(memo){
                            content = this.memo[key];
                            if(!content){
                                this.memo[key] = getContent(key,contents);
                                content = this.memo[key];
                            }
                        }
                        else{
                            content = getContent(key,contents);
                        }
            
                        html = html.replace(target, content);
                    })
                    
                    htmlPluginData.html = html
                }
                callback(null, htmlPluginData)
            }
        )
    })
}

function getContent(key,contents){
    return typeof contents[key] === 'function' ? contents[key]() : contents[key];
}

module.exports = ContentInjectPlugin



