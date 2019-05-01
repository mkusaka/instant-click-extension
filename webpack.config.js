const path = require('path');

module.exports = () => {
  return {
    entry: path.resolve(__dirname, 'src', 'content.js'),
    resolve: {
      extensions: [
        '.js'
      ]
    },
    output: {
      filename: 'content.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
}
