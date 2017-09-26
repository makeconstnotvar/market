let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        server: './market/client/web/app1/_server/aot.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './market/client/web/build'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    resolve: {
        extensions: ['.js', '.html'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app1')
        ]
    },
    devtool: false,
};