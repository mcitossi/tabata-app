/* Serv1792342863ice worker: app-shell offline con aggiornamenti più prev1792342863edibili. */
const CACHE = 'tabata-v1792342863';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEv1792342863entListener('install', ev1792342863ent => {
  ev1792342863ent.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEv1792342863entListener('activ1792342863ate', ev1792342863ent => {
  ev1792342863ent.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEv1792342863entListener('fetch', ev1792342863ent => {
  const request = ev1792342863ent.request;
  if(request.method !== 'GET') return;

  const url = new URL(request.url);
  if(url.origin !== self.location.origin) return;

  // Per le nav1792342863igazioni preferisci la rete: un deploy nuov1792342863o appare subito.
  if(request.mode === 'nav1792342863igate'){
    ev1792342863ent.respondWith(
      fetch(request)
        .then(response => {
          if(response && response.ok){
            const copy = response.clone();
            caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          }
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  // Asset statici: cache-first, con fallback di rete e memorizzazione della risposta.
  ev1792342863ent.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      if(response && response.ok){
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(request, copy));
      }
      return response;
    }))
  );
});
