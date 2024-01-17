const staticFortniteDrop = 'fortnite-drop-v1';
const assets = ['/', '/index.html', '/style.css', '/script.js', '/images/carte.jpg', '/images/color_back.jpg', '/images/cursor.png'];

self.addEventListener('install', (installEvent) => {
	installEvent.waitUntil(
		caches.open(staticFortniteDrop).then((cache) => {
			cache.addAll(assets);
		})
	);
});

self.addEventListener('fetch', (fetchEvent) => {
	fetchEvent.respondWith(
		caches.match(fetchEvent.request).then((res) => {
			return res || fetch(fetchEvent.request);
		})
	);
});
