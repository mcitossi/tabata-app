/* Serv1792343063ice worker: app-shell offline con aggiornamenti più prev1792343063edibili. */
const CACHE = 'tabata-v1792343063';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-180.png',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-512.png'
];

self.addEv1792343063entListener('install', ev1792343063ent => {
  ev1792343063ent.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEv1792343063entListener('activ1792343063ate', ev1792343063ent => {
  ev1792343063ent.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEv1792343063entListener('fetch', ev1792343063ent => {
  const request = ev1792343063ent.request;
  if(request.method !== 'GET') return;

  const url = new URL(request.url);
  if(url.origin !== self.location.origin) return;

  // Per le nav1792343063igazioni preferisci la rete: un deploy nuov1792343063o appare subito.
  if(request.mode === 'nav1792343063igate'){
    ev1792343063ent.respondWith(
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
  ev1792343063ent.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      if(response && response.ok){
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(request, copy));
      }
      return response;
    }))
  );
});
