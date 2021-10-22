//别名，以后路径就不需要  。/assets了，只需要assets
module.exports={
  configureWebpack:{
    resolve:{
      alias:{
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views',
      }
    },
    // plugins:[
    //   new webpack.providePlugin({
    //     $:"jquery",
    //     jQuery:"jquery",
    //     "windows.jQuery":"jquery"
    //   })
    // ]
  }
}
