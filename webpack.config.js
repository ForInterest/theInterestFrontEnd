let path = require('path');
let webpack = require('webpack');

module.exports = {
	entry : './src/index.js',
	output : {
		filename : 'bundle.js',
		path : path.resolve(__dirname,'dist')
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(), //启用 HMR
	],
	devServer : {
		hot : true, //
		contentBase : path.resolve(__dirname, 'dist'),
		compress : true,
		publicPath : '/',
		port : 9000
	},
	module : {
		rules : [
			{
				test : /\.css$/,
				use : [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			},
			{
				test : /\.scss$/,
				use: [
					{
						loader: 'style-loader' // 将 JS 字符串生成为 style 节点
					}, {
						loader: 'css-loader' // 将 CSS 转化成 CommonJS 模块
					}, {
						loader: 'sass-loader' // 将 Sass 编译成 CSS
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			}
		]
	} 
};