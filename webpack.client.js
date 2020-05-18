const path = require('path');
const merge = require('webpack-merge')
const baseConfig = require('./wepack.base.js');
const config = {
    entry: './src/client/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/build'),
    }
}

module.exports = merge(baseConfig, config);