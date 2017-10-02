const webpack = require('webpack'),
    path = require('path');

module.exports = {
    entry: {
        app: './market/client/web/app1/_browser/index.js',
        libs: './market/client/web/app1/_browser/libs.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './market/client/web/build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.js$/,
                loaders: ['angular2-template-loader'],
                include: path.join(__dirname, 'market/client/web/app1'),
            },
            {
                test: /\.jpg$/,
                use: [{
                    loader: 'file-loader',
                }]

            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: false
                }
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            path.join(__dirname, 'client/app')
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            minChunks: 2,
            chunks: [
                'app',
                'libs'
            ]
        })
    ],
    resolve: {
        extensions: [ '.js', '.html','.jpg'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app1')
        ]

    },
    //stats: {children: false},
    devtool: 'source-map'
};