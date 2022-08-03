const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8000,
    proxy: {
      '/user': {
        target: 'http://127.0.0.1:8500',
        ws: false,
        changeOrigin: true,
        pathRewrite: {
          '^/user': ''
        }
      }
    }
  }
})
