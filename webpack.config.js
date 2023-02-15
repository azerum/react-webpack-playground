const path = require('path');
/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './main.jsx',

    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'main.js'
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
            test: /\.jpg$/,
            exclude: /node_modules/,
            type: 'asset/resource'
          }
        ]
    }
};
