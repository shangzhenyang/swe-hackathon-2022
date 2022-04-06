let map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: 47.664291,
			lng: -122.304207
		},
		mapId: "d470e0ed1c5fa7dd",
		zoom: 12
	});
}
