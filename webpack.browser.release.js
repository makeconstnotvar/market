let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './market/client/web/app/_browser/index.js'
    },
    output: {
        filename: 'browser.js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        })
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app')
        ]
    },
    devtool: false,
};