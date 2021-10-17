const parse = require('csv-parse/lib/sync')
const listingToJson = require('../src/csv.js')

self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting()) // Activate worker immediately
})

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim()) // Become available to all pages
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return (
        resp ||
        fetch(event.request)
          .then(function(response) {
            let responseClone = response.clone()
            caches.open('v1').then(cache => {
              cache.put(event.request, responseClone)
            })

            return response
          })
          .catch(function() {
            return caches.match('no-photo.jpg')
          })
      )
    })
  )
})

// TODO(dmadisetti): Load csv, hash, see if data is needs to be updates, and
// change react state.
self.addEventListener('message', function(event) {
  console.log('postMessage received', event.data)
  event.waitUntil(
    (async function() {
      // Exit early if we don't have access to the client.
      // Eg, if it's cross-origin.
      if (!event.clientId) return

      const updated = fetch(
        'https://docs.google.com/spreadsheets/d/e/2PACX-1vScFdbDqIYm8iiHys0fo_TJ9nJ6aqLxZw8lHpZ4knuVEGmlNJGzsDaKSbPxFB5cTCFmQHZtrYcxyHkl/pub?gid=187538216&single=true&output=csv',
        { redirect: 'follow' }
      )
        .then(response => response.text())
        .then(text => listingToJson)

      // Get the client.
      const client = await clients.get(event.clientId)
      // Exit early if we don't get the client.
      // Eg, if it closed.
      console.log('executing')
      if (!client) return
      console.log('client', client)

      // Send a message to the client.
      client.postMessage(await updated)
    })()
  )
})
