document.addEventListener('DOMContentLoaded', function () {
	const selectButton = document.getElementById('selectButton');
	const placeNameElement = document.getElementById('placeName');
	const placeNameElementContainer = document.getElementById('selectedPlace');
	const showHides = document.getElementById('showHides');
	const cursor = document.getElementById('cursor');

	const places = [
		{ name: "Rebel's Roost", x: 28.5, y: 18 },
		{ name: 'Lavish Lair', x: 44.5, y: 26 },
		{ name: 'Classy Courts', x: 65.5, y: 20 },
		{ name: 'Ritzy Riviera', x: 18, y: 36 },
		{ name: 'Reckless Railways', x: 65, y: 44 },
		{ name: 'Grand Glacier', x: 82.3, y: 44 },
		{ name: 'Ruined Reels', x: 44, y: 50 },
		{ name: 'Fencing Fields', x: 44, y: 64 },
		{ name: 'Pleasant Piazza', x: 25, y: 57 },
		{ name: 'Hazy Hillside', x: 65, y: 67 },
		{ name: 'Snooty Steppes', x: 25, y: 74 },
	];

	const caches = [
		{ name: 'Pleasant Pizza Hide', x: 31.5, y: 65, hide: true },
		{ name: 'Hazy Hillside Hide', x: 61, y: 63, hide: true },
	];

	selectButton.addEventListener('click', function () {
		if (showHides && showHides.checked) {
			places.push(...caches);
		}
		for (let i = 0; i < places.length; i++) {
			setTimeout(function () {
				const randomIndex = Math.floor(Math.random() * places.length);
				const selectedPlace = places[randomIndex];
				placeNameElement.textContent = selectedPlace.name;
				if (selectedPlace.hide) {
					placeNameElementContainer.style.backgroundColor = 'red';
				} else {
					placeNameElementContainer.style.backgroundColor = '';
				}
				placeNameElementContainer.style.display = 'block';
				cursor.style.left = `${selectedPlace.x}%`;
				cursor.style.top = `${selectedPlace.y}%`;
				cursor.style.display = 'block';
			}, 150 * i);
		}
	});
});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker
			.register('serviceWorker.js')
			.then((res) => console.log('service worker registered'))
			.catch((err) => console.log('service worker not registered', err));
	});
}
