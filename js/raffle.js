const raffleCards = []
const raffleResults = ["谢谢惠顾", "屠龙宝刀"]
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
			card.innerText = raffleResults[resultIndex]
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
	}, 5000)
}
