const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

// Add more js files here to build
let jsAssets = [
  './src/js/app.js'
]

module.exports = () => {
  return {
      entry: ['bootstrap-loader'].concat(jsAssets),
      output: {
          path: path.join(__dirname, 'dist/js'),
          filename: 'app.js'
      },
      plugins: [
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery',
              Tether: 'tether',
              'window.Tether': 'tether',
              Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
              Button: 'exports-loader?Button!bootstrap/js/dist/button',
              Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
              Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
              Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
              Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
              Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
              Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
              Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
              Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
              Util: 'exports-loader?Util!bootstrap/js/dist/util',
          }),
          new ExtractTextPlugin({filename: '../css/app.css', allChunks: true})
      ],
      module: {
          rules: [
              {
                  test: /\.js$/,
                  exclude: /node_modules|test|dist/,
                  loader: 'babel-loader',
              },
              {
                  test: /bootstrap[\/\\]dist[\/\\]js[\/\\]umd[\/\\]/,
                  loader: 'imports-loader?jQuery=jquery'
              },
              {
                  test: /\.(woff2?|svg)$/,
                  loader: 'url-loader?limit=10000'
              },
              {
                  test: /\.(ttf|eot)$/,
                  loader: 'file-loader'
              },
              {
                  test: /\.(scss)$/,
                  use: [
                      {
                          loader: 'style-loader', // inject CSS to page
                      },
                      {
                          loader: 'css-loader', // translates CSS into CommonJS modules
                      },
                      {
                          loader: 'postcss-loader', // Run post css actions
                          options: {
                              plugins: function () { // post css plugins, can be exported to postcss.config.js
                                  return [
                                      require('precss'),
                                      require('autoprefixer')
                                  ]
                              }
                          }
                      },
                      {
                          loader: 'sass-loader' // compiles Sass to CSS
                      }
                  ]
              }
          ]
      },
      devtool: 'source-map'
  }
}
