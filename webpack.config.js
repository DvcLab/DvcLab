const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    // script: './src/js/custom-script.js',
    // bootstrap: './src/js/bootstrap.bundle.min.js',
    // fullpage: './src/js/fullpage.js',
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
    rules: [
    //   {
    //   test: /\.(svg|png|jpg|gif)$/,
    //   use: {
    //     loader: 'url-loader',
    //     options: {
    //       esModule: false,
    //       name: '[name].[ext]',
    //       outputPath: 'images/',
    //       limit: 1024
    //     }
    //   },
    //   type: 'javascript/auto'
    // },
    // {
    //   test: /\.html$/i,
    //   loader: 'html-loader',
    // },
    {
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