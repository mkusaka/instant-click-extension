const path = require('path');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'src', 'content.js'),
    resolve: {
      extensions: [
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
        }
      ]
    },
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
