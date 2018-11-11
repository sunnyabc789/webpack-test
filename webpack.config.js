const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	// entry: './src/index.js',
	entry: {
		// app: './src/index.js',
		main: './src/index.js',
		vendor: [
			'lodash'
		]
	},
	output: {
		// filename: 'bundle.js',
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Caching'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'manifest'
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