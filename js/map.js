let map, infoWindow
function clearClass(className) {
	const elements = document.getElementsByClassName(className)
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i]
		element?.parentElement?.removeChild(element)
	}
}
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
	google.maps.event.addListener(map, "click", evt => {
		if (evt.placeId) {
			clearClass("btn-check-out")
			const newBtn = document.createElement("button")
			newBtn.classList.add("btn-check-out")
			newBtn.innerText = "I'm here!"
			newBtn.style.left = evt.domEvent.x + "px"
			newBtn.style.top = evt.domEvent.y + "px"
			newBtn.onclick = function () {
				location.href = "raffle.html"
			}
			document.body.appendChild(newBtn)
		}
	})
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
