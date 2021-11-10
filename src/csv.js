const parse = require('csv-parse/lib/sync')
const hash = require('object-hash')

const listingsToJson = csv => {
  const json = parse(csv, { columns: true })
  return {
    hash: hash(json),
    json: json
  }
}

module.exports = listingsToJson
