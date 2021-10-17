var path = require('path')

module.exports = {
  entry: './public/sheets-worker.js',
  output: {
    filename: 'sheets-worker.js',
    path: path.resolve(__dirname, 'build')
  }
}
