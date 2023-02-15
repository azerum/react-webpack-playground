const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    
    entry: {
        main: './main.jsx',
    },

    mode: process.env.NODE_ENV,

    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[contenthash].js',

        clean: true
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',

                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    useBuiltIns: 'entry',

                                    corejs: {
                                        version: '3.0'
                                    }
                                }
                            ], 
                            '@babel/preset-react'
                        ],

                        plugins: process.env.NODE_ENV === 'production'
                            ? []
                            : ['react-refresh/babel']
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
        }),

        process.env.NODE_ENV === 'production'
            ? null
            : new ReactRefreshWebpackPlugin()
    ].filter(p => p !== null)
};
