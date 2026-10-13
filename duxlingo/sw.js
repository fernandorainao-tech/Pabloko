/* Duxlingo se mudó a /InglesDux/: este service worker se elimina solo */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.registration.unregister()); });
