var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/app.js',
  	'./styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
  	rules: [
      {
  			test: /\.hbs$/,
  			use: 'handlebars-loader'
  		},
  		{
  			test: /\.(sass|scss)$/,
  			use: ExtractTextPlugin.extract(['css-loader?url=false', 'sass-loader'])
  		}
  	]
  },
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
  	new webpack.ProvidePlugin({
  		$: 'jquery',
  		jQuery: 'jquery'
  	}),
  	new ExtractTextPlugin({
  		filename: 'bundle.css',
  		allChunks: true
  	}),
    new HtmlWebpackPlugin({
      template: 'templates/index.hbs',
      filename: 'index.html'
    })
  ]
};
