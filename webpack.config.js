var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/App.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        include: __dirname + '/app',
        loader: "babel",
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};