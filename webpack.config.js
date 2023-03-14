const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//For CSS stuff, see https://github.com/webpack-contrib/css-loader#recommend

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    context: path.resolve(__dirname, 'src'),

    entry: {
        main: './main.tsx',
    },

    mode: process.env.NODE_ENV,

    output: {
        path: path.resolve(__dirname, 'out'),
        filename: '[name].[contenthash].js',

        clean: true
    },

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,

                use: babelLoader()
            },

            {
                test: /\.tsx?$/,
                exclude: /node_modules/,

                use: [
                    babelLoader(),
                    
                    {
                        loader: 'ts-loader',
                        
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json')
                        }
                    }
                ]
            },

            {
                test: /\.css$/,

                use: [
                    MiniCssExtractPlugin.loader,

                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                            url: true
                        }
                    }
                ]
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
            : new ReactRefreshWebpackPlugin(),

        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ].filter(p => p !== null)
};

/**
 * @returns {import('webpack').RuleSetUseItem}
 */
function babelLoader() {
    return {
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
}
