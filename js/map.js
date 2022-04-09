let map, infoWindow;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 47.664291,
			lng: -122.304207
		},
		mapId: "d470e0ed1c5fa7dd",
		zoom: 12
	})
	infoWindow = new google.maps.InfoWindow()
}
if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(position => {
		const pos = {
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		}
		infoWindow.setPosition(pos)
		infoWindow.setContent("You are here! You are not in any store!")
		infoWindow.open(map)
		map.setCenter(pos)
		map.setZoom(16)
	}, () => {
		handleLocationError(true, infoWindow, map.getCenter())
	})
} else {
	handleLocationError(false, infoWindow, map.getCenter())
}
