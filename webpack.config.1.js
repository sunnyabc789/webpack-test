const webpack = require('webpack');
const path = require('path')
const config = require('./webpack.config')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractTextPlugin = new ExtractTextPlugin({
  filename: 'css/[name].abc.css'
})

webpack(config).run()

webpack({
  module: {
    rules: [
      {
        test: /\.css$/,
        //此时用的是use没用inculde exclude
        // use: [
        //   'style-loader',
        //   'css-loader'
        // ]
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader'],
          publicPath: '../'
        })
      }, {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                //less-loader要求的
                javascriptEnabled: true
              }
            }
         ]
        })
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: ['css-loader', {
            loader: 'stylus-loader',
            options: {
              // 可以通过扩展包修改主色调
              //stylus-loader的使用方式 定义了全局变量
              import: path.resolve(__dirname, 'src/constants.1.styl')
            }
          }]
        })
      },
    ]
  },
  plugins: [
    extractTextPlugin
  ]
}).run()