let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './market/client/web/app1/_browser/aot.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './market/client/web/build')
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        })
    ],
    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app1')
        ]
    },
    devtool: false,
};