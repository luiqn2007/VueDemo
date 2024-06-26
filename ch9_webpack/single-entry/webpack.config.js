const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './dist/'
    },
    devServer: {
        static: '../single-entry'
    }
}