// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin') // 引入CDN配置插件
'use strict'
const path = require("path");
function resolve(dir){
  return path.join(__dirname, dir);
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/danieldfnsw.github.io/': '/',
//   publicPath: "./",
  outputDir: "dist",
  // assetsDir: "static",
  // indexPath: "index.html",
  // filenameHashing: true,
  configureWebpack: {
    name: 'danieldfnsw.github.io',
    resolve: {
      alias: {
        '@': resolve('./src')
        // 'assets': resolve('./src/assets'),
        // 'style': resolve('./src/style')
      }
    },
  },
//   css: {
//     loaderOptions: {
//         sass: {
//             // 全局sass变量	
//             additionalData: `@import "~@/assets/scss/_variable.scss";`
//         }
//     }
// },
//   devServer: {
//     hot: true,//自动保存
//     open: true,//自动启动
//     port: 9090,//默认端口号
//     host: "localhost",
//     proxy:{
//         "/api":{
//          target:'http://uac.mayikuu.com', // 你请求的第三方接口
//           changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
//           ws:true
//         }
//     }
// },
}