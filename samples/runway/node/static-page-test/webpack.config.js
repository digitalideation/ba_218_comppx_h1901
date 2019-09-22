const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/main.js'],
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: './docs'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: false
        })
    ]
    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: /(node_modules)/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-env']
    //                   }
    //             }
    //         }
    //     ]
    // }
};
