let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './market/client/web/app/_browser/index.js'
    },
    output: {
        filename: 'browser.js',
        path: path.resolve(__dirname, 'build/client')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules|ngfactory/,
                use: ["source-map-loader"],
                enforce: "pre"
            }]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app')
        ]
    },
    devtool: 'source-map',
};