var path = require('path')

module.exports = {
  entry: './public/sheetsWorker.js',
  output: {
    filename: 'sheetsWorker.js',
    path: path.resolve(__dirname, 'build')
  }
}
