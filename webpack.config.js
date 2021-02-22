const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/js/custom.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]'
  },
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    hot: true,
    hotOnly: true
  },
  module: {
    rules: [{
      test: /\.(png|jpg)$/,
      type: 'asset/resource'
    },{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/images/favicon.ico',
    }),
    new CleanWebpackPlugin()
  ],
  
};