// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/app-music-deezer/'
    : '/',
  chainWebpack: config => {
    config.performance
      .maxEntrypointSize(1000000)
      .maxAssetSize(1000000)
  }
  // configureWebpack: {
  //   plugins: [
  //     new VuetifyLoaderPlugin()
  //   ]
  // }
}
