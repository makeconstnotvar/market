let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './market/client/web/app1/_browser/index.js'
    },
    output: {
        filename: 'browser.js',
        path: path.resolve(__dirname, './market/client/web/build')
    },
    plugins: [
        /*new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
        })*/
    ],
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules|ngfactory/,
    //             use: ["source-map-loader"],
    //             enforce: "pre"
    //         }]
    // },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app1')
        ]
    },
    devtool: 'source-map',
};