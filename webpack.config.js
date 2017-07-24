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
				test : '/\.css$/',
				use : ['style-loader' , 'css-loader']
			}
		]
	} 
};