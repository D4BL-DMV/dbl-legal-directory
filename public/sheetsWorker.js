const parse = require('csv-parse/lib/sync')

const ignoreColumns = ['Links', 'Photo Source', 'Location', 'Description hed']

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
self.addEventListener('message', function(evt) {
  console.log('postMessage received', evt.data)
  console.log(
    fetch(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vScFdbDqIYm8iiHys0fo_TJ9nJ6aqLxZw8lHpZ4knuVEGmlNJGzsDaKSbPxFB5cTCFmQHZtrYcxyHkl/pub?gid=187538216&single=true&output=csv'
    )
  )
  // parse and return json
})
