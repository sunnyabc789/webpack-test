const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	// entry: './src/index.js',
	entry: {
		app: './src/index.js'
	},
	output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
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