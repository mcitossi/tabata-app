const CACHE = 'tabata-v14';
const SHELL = ['./', './index.html', './workout-data.js', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('tabata-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if(e.request.method !== 'GET' || url.origin !== self.location.origin || !url.href.startsWith(self.registration.scope)) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      const response = await fetch(e.request);
      if(response.ok) e.waitUntil(cache.put(e.request, response.clone()).catch(() => {}));
      return response;
    } catch(error) {
      const saved = await cache.match(e.request);
      if(saved) return saved;
      if(e.request.mode === 'navigate') {
        const page = await cache.match(new URL('./index.html', self.registration.scope).href);
        if(page) return page;
      }
      throw error;
    }
  })());
});
