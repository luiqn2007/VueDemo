const path = require('path')
const VueLoaderPlugin = require('vue-loader/dist/plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './main.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    },
    plugins: [ new VueLoaderPlugin.Plugin() ]
}