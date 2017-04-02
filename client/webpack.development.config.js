var webpackCommon = require('./webpack.common.config');
var webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackCommon, {
	bail: false,
	devtool: 'eval'
});
