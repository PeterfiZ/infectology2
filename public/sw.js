/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((cache) => caches.delete(cache)));
    }).then(() => self.registration.unregister())
  );
  self.clients.claim();
});

