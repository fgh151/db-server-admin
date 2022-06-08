// Set this to true for production
const CACHE = true;

// Name our cache
const CACHE_NAME = 'db-server-admin';
const URLS_TO_CACHE = [
    "/static/css/*.css",
    "/static/css/*.map",
    "/static/js/*.js",
    '/static/media/*.*',
    "/*.*",
]

// Delete old caches that are not our current one!
// eslint-disable-next-line no-restricted-globals
self.addEventListener("activate", event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then(keyList =>
                Promise.all(keyList.map(key => {
                    if (!cacheWhitelist.includes(key)) {
                        console.log('Deleting cache: ' + key)
                        return caches.delete(key);
                    }
                }))
            )
    );
});

// The first time the user starts up the PWA, 'install' is triggered.
// eslint-disable-next-line no-restricted-globals
self.addEventListener('install', function (event) {
    if (CACHE) {
        event.waitUntil(
            caches.open(CACHE_NAME)
                .then(function (cache) {
                    cache.addAll(URLS_TO_CACHE)
                    console.log('cached');
                })
        );
    }
});

// When the webpage goes to fetch files, we intercept that request and serve up the matching files
// if we have them
// eslint-disable-next-line no-restricted-globals
self.addEventListener('fetch', function (event) {
    if (CACHE) {
        event.respondWith(
            caches.match(event.request).then(function (response) {
                return response || fetch(event.request);
            })
        );
    }
});