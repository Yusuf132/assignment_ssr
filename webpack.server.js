const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./wepack.base.js');
const webpackNodeExternals = require('webpack-node-externals')
const config = {
    target: 'node',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config);