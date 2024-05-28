const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        myindex: './src/myindex.js',
        mymain: './src/mymain.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: '[name]-bundle.js'
    },
    devServer: {
        static: '../multi-entries'
    }
}