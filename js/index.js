const pages = document.getElementsByTagName("section")
let currentPage = 0
document.getElementById("btn-next").onclick = () => {
	if (currentPage === 1) {
		document.body.classList.add("zoom-in")
		setTimeout(() => {
			location.href = "map.html"
		}, 500)
	} else {
		pages[currentPage].classList.add("slide-out-to-left")
		currentPage++
		pages[currentPage].classList.add("slide-in-from-right")
	}
}
