const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	// entry: './src/index.js',
	entry: {
		app: './src/index.js',
		print: './src/print.js'
	},
	output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common' // 指定公共 bundle 的名称。
		})
	],
	// module: {
	//   rules: [
	//     {
	//       test: /\.css$/,
	//       //此时用的是use没用inculde exclude
	//       use: [
	//         'style-loader',
	//         'css-loader'
	//       ]
	//     },
	//     {
	//       test: /\.(png|svg|jpg|gif)$/,
	//       use: [
	//         'url-loader'
	//       ]
	//     }
	//   ]
	// }
}