const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    
    entry: {
        main: './main.jsx',
    },

    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[contenthash].js',

        clean: true
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',

                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },

          {
            test: /\.webp$/,
            exclude: /node_modules/,
            type: 'asset/resource'
          }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            inject: 'body'
        })
    ]
};
