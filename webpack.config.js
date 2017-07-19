const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: {
    mqtt: './src/mqtt.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        loader:'babel-loader',
        test: /\.jsx?/,
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  devServer:{
    port:3033,
    contentBase:'./dist',
    inline:true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ORing IoT Platform',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
      // minify: {
      //   collapseBooleanAttributes: true,
      //   collapseInlineTagWhitespace: true,
      //   collapseWhitespace: true,
      //   decodeEntities: true,
      //   html5: true,
      //   preventAttributesEscaping: true,
      //   removeComments: true,
      // },
    })
  ]
}
