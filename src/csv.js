const _ = require('lodash')
const parse = require('csv-parse/lib/sync')
const hash = require('object-hash')

const ignoreColumns = ['Links', 'Photo Source', 'Location', 'Description hed']
const listingsToJson = csv => {
  const json = parse(csv, { columns: true }).map(donor =>
    _.omit(donor, ignoreColumns)
  )
  return {
    hash: hash(json),
    json: json
  }
}

module.exports = listingsToJson
