const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  indexPath: 'index.html',
  assetsDir: './static',
  productionSourceMap: false,
})
