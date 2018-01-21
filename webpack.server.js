let path = require('path'),
    ngtools = require('@ngtools/webpack');

module.exports = {
    entry: {
        server: './market/client/web/app/_server/index.ts'
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build/client'),
        libraryTarget: "commonjs"
    },

    plugins: [
        new ngtools.AngularCompilerPlugin({
            tsConfigPath: __dirname+'/tsconfig.debug.json',
            entryModule: __dirname+'/market/client/web/app/_server/module#ServerAppModule',
            sourceMap: false
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
    target: 'node',
    devtool: false
};