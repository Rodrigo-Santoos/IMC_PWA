const cacheName = 'v1';

const resourcesToProcache = [
  '/',
  'index.html',
  '/styles.css',
];

self.addEventListener('install', (event) =>{
  event.waitUtil(
    caches.open(cacheName)
      .then(cache =>(cache.addAll(resourcesToProcache))),
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(cacheResponse => (cacheResponse || fetch(event.request))),
  );
});