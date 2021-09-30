const gulp = require('gulp')
const fs = require('fs')

const listingToJson = require('./src/csv.js')

const convertToJson = async done => {
  console.log(listingToJson)
  const csv = fs.readFileSync('./csv/listings.csv').toString()
  fs.writeFileSync(
    './src/data/listings.json',
    JSON.stringify(listingToJson(csv))
  )
  done()
}

gulp.task('convertToJson', convertToJson)
