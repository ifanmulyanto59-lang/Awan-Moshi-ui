const CACHE_NAME = "awan-os-v1";

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./Upload.json"
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );

});
