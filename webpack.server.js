let path = require('path');

module.exports = {
    entry: {
        server: './market/client/web/app/_server/index.js'
    },
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'build'),
        libraryTarget: "commonjs"
    },
    target: 'node',
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'market/client/web/app')
        ]
    },
    devtool: false,
};