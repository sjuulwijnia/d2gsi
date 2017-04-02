var path = require('path');
var webpack = require('webpack');

var webpackHtmlPlugin = require('html-webpack-plugin');
var webpackExtractPlugin = require('extract-text-webpack-plugin');

var SRC_FOLDER = path.resolve(__dirname, "src");
var DIST_FOLDER = path.resolve(__dirname, "../build/client");

var extractSass = new webpackExtractPlugin({
	filename: "app.css"
});

var sassLoader = {
	loader: 'sass-loader',
	options: {
		includePaths: [
			path.resolve(SRC_FOLDER, 'sass')
		]
	}
};

var genericSassLoader = [
	'raw-loader',
	sassLoader
];

var genericHtmlLoader = [
	'html-loader'
];

module.exports = {
	entry: {
		'app': path.resolve(SRC_FOLDER, 'startup.ts'),
		'css': path.resolve(SRC_FOLDER, 'sass/app.scss'),
	},

	node: {
		fs: "empty"
	},

	module: {
		exprContextCritical: false,

		rules: [
			// ANGULAR 2 RELATED
			{
				test: /\.ts$/,
				use: [
					"angular2-template-loader",
					"ts-loader"
				]
			},

			{
				test: /\.component.(css|scss)$/,
				use: genericSassLoader
			},

			{
				test: /\.component.html$/,
				use: genericHtmlLoader
			},

			// CSS RELATED
			// scss + css
			{
				test: /.(css|scss)$/gmi,
				exclude: /component.(css|scss)/gmi,
				use: extractSass.extract({
					use: [
						'css-loader',
						sassLoader
					],

					fallback: 'style-loader'
				})
			},

			// fonts (see: https://survivejs.com/webpack/loading/fonts/#implementing-webpack-configuration)
			{
				test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'fonts/[name].[ext]'
					}
				}
			},

			// images (see: https://survivejs.com/webpack/loading/fonts/#implementing-webpack-configuration)
			{
				test: /\.(jpg|jpeg|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: 'images/[name].[ext]'
					}
				}
			},
		]
	},

	output: {
		filename: '[name].js',
		path: DIST_FOLDER
	},

	plugins: [
		new webpackHtmlPlugin({
			hash: true,

			filename: 'index.html',
			template: path.resolve(SRC_FOLDER, 'index.html')
		}),

		extractSass
	],

	resolve: {
		extensions: [
			'.ts',
			'.js',
			'.scss'
		],

		modules: [
			SRC_FOLDER,
			"node_modules"
		]
	},

	watchOptions: {
		ignored: /node_modules/
	}
}
