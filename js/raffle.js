const raffleCards = []
const raffleResults = [
	null,
	"DawGo%20Stickers/drink9.png",
	"DawGo%20Stickers/drink7.png",
	"DawGo%20Stickers/drink6.png",
	"DawGo%20Stickers/drink5.png",
	"DawGo%20Stickers/drink4.png",
	"DawGo%20Stickers/drink3.png",
	"DawGo%20Stickers/drink2.png",
	"DawGo%20Stickers/drink1.png",
	"DawGo%20Stickers/food7.png",
	"DawGo%20Stickers/food6.png",
	"DawGo%20Stickers/food3.png",
	"DawGo%20Stickers/food2.png",
	"DawGo%20Stickers/food1.png",
	"DawGo%20Stickers/shoes9.png",
	"DawGo%20Stickers/shoes2.png",
	"DawGo%20Stickers/shoes1.png"
]
let selected
function createTable(col, row) {
	const table = document.getElementsByTagName("table")[0]
	for (let i = 0; i < row; i++) {
		const newTr = document.createElement("tr")
		for (let j = 0; j < col; j++) {
			const newDiv = document.createElement("div")
			const newTd = document.createElement("td")
			newDiv.classList.add("raffle-card")
			newTd.appendChild(newDiv)
			newTr.appendChild(newTd)
			raffleCards.push(newDiv)
		}
		table.appendChild(newTr)
	}
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}
function highlightCard(index, target) {
	if (index >= raffleCards.length) {
		index = 0
	}
	const card = raffleCards[index]
	card.classList.add("highlight")
	setTimeout(() => {
		card.classList.remove("highlight")
		if (index === target) {
			card.classList.add("selected")
			const resultIndex = getRandomInt(0, raffleResults.length)
			if (resultIndex === 0) {
				card.innerText = "Good Luck!"
			} else {
				const newImg = new Image()
				newImg.src = raffleResults[resultIndex]
				card.appendChild(newImg)
			}
			selected = card
			document.getElementById("btn-start").innerText = "Restart"
			if (resultIndex === 1) {
				card.classList.add("flash")
			}
		} else {
			highlightCard(index + 1, target)
		}
	}, 75)
}
createTable(3, 4)
document.getElementById("btn-back").onclick = function () {
	if (history.length <= 1) {
		location.href = "map.html"
	} else {
		history.go(-1)
	}
}
document.getElementById("btn-start").onclick = function () {
	if (selected) {
		selected.classList.remove("selected", "flash")
		selected.innerHTML = ""
		selected = null
	}
	highlightCard(0, getRandomInt(0, raffleCards.length))
	this.disabled = true
	setTimeout(() => {
		this.disabled = false
	}, 1000)
}
