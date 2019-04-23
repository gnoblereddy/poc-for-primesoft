var path = require('path');
var webpack = require('webpack');

var config  = {
    entry: './main.js',
    output: {
        path : path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    devServer: {
        inline: true,
        port: 8060
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, //check for all js files
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
              presets: ['react', 'es2015']
            }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' },
                { loader: 'css-loader' }]
            },
        ]
    }
}

module.exports = config;