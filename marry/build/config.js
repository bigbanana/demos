var path = require('path')

module.exports = {
  entry: {
    client: [path.resolve(process.cwd(), 'build/entry.js')]
  },
  webpack: function(webpackConfig, options, webpack){
    webpackConfig.resolve.alias['@'] = process.cwd()
  },
  // postcss: {
  //   plugins: [
  //     require('postcss-pxtorem')({propList: ['*']})
  //   ]
  // }
}