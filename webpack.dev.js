const webpack = require('webpack');
const config = require('./webpack.config');
const HTMLPlugin = require('html-webpack-plugin');
const path = require('path');

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new HTMLPlugin({
        template: './index.html'
    })
)

config.devtool = 'source-map';

config.devServer = {
    contentBase: path.resolve('./'),
    port: 8080,
    inline: true,
    hot: true,
    proxy: {}
}

module.exports = config;