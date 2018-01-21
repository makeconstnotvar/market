let webpack = require('webpack'),
    path = require('path'),
    ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
        browser: './market/client/web/app/_browser/index.ts',
        ie: './market/client/web/app/_browser/ie.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build/client')
    },
    plugins: [
        new ngtools.AngularCompilerPlugin({
            tsConfigPath: __dirname+'/tsconfig.release.json',
            entryModule: __dirname+'/market/client/web/app/_browser/module#BrowserAppModule',
            sourceMap: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false}
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
    devtool: false,
};