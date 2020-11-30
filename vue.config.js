module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ],
  publicPath: './',
  devServer: {
    // open: false,
    host: "localhost",
    port: 8081,
    // https: false,
    proxy: {
      "/api": {
        // target: "http://39.106.83.197:3000", // 服务器测试
        target: "http://localhost:3000", // 本地测试
        ws: true, // websocket
        changeOrigin: true, // allow cross-domain
        crossorigin: "anonymous",
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
