let webpack = require('webpack'),
    path = require('path'),
    ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
        browser: './market/client/web/app/_browser/index.ts',
        libs: './market/client/web/app/_browser/libs.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/client')
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
        new ngtools.AngularCompilerPlugin({
            tsConfigPath: __dirname + '/tsconfig.debug.json',
            entryModule: __dirname + '/market/client/web/app/_browser/module#BrowserAppModule',
            mainPath: __dirname + '/market/client/web/app/_browser/index.ts',
            sourceMap: true
        })
    ],
    module: {
        rules: [
            {
                test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app')
        ]
    },
    devtool: 'source-map',
};