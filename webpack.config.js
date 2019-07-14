const path = require('path');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'src', 'content.ts'),
    resolve: {
      extensions: [
        '.ts',
        '.js'
      ]
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.ts$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader'
          }
        }
      ]
    },
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
