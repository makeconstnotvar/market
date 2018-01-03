let webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        browser: './market/client/web/app/_browser/index.js',
        libs: './market/client/web/app/_browser/libs.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/temp')
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2,
            chunks: [
                'browser',
                'libs'
            ]
        }),
    ],
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