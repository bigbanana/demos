var path = require('path')

var cwd = process.cwd()
var proxy = cwd.replace(/^.*?www/,'http://localhost').replace(/\\/g,'/') + '/api'
module.exports = {
  entry: {
    client: [path.resolve(process.cwd(), 'build/entry.js')]
  },
  webpack: function(webpackConfig, options, webpack){
    webpackConfig.resolve.alias['@'] = process.cwd()
    if(!options.production){
      webpackConfig.resolve.alias['jquery'] = 'jquery/src/jquery.js'
      webpackConfig.plugins.push(new webpack.ProvidePlugin({
        $: 'jquery',
        // Vue: ['vue/dist/vue.esm.js', 'default']
      }))
      return webpackConfig
    }
    webpackConfig.module.rules.forEach(function(item){
      //删除loader中的extract插件
      if(item.loader instanceof Array && /extract-text-webpack-plugin/.test(item.loader[0].loader)){
        item.loader.shift()
        item.loader = item.loader.map(function(it){
          it.loader = it.loader.replace(/(\?|&)sourceMap/,'')
          return it
        })
      }
      //删除vue-loader中的extract插件
      if(item.loader == 'vue-loader'){
        for(var ld in item.options.loaders){
          item.options.loaders[ld].shift()
          item.options.loaders[ld] = item.options.loaders[ld].map(function(it){
            it.loader = it.loader.replace(/(\?|&)sourceMap/,'')
            return it
          })
        }
      }
      //删除file-loader base64转码限制
      if(item.loader == 'file-loader'){
        item.loader = 'url-loader'
        item.query.limit= 100000000
      }
    })
    webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        negate_iife: false
      },
      output: {
        comments: false
      }
    }))
    return webpackConfig
  },
  proxy: proxy
}