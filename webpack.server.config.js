let path = require('path');

module.exports = {
    entry: {
        server: './market/client/web/build/aot/market/client/web/app1/_server/index.js'
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, './market/client/web/build'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    resolve: {

        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/build/aot/market/client/web/app1')
        ]
    },
    devtool: false,
};