const collection = Vue.createApp({
	data() {
		return {
			badges: {
				Drink: ["DawGo%20Stickers/drink1.png",
				 			"DawGo%20Stickers/drink2.png",
							"DawGo%20Stickers/drink3.png",
				   			"DawGo%20Stickers/drink4.png",
							"DawGo%20Stickers/drink5.png",
							"DawGo%20Stickers/drink6.png"
						],
				Food: ["Ramen", "Sushi", "Hamburger", "Steak"]
			}
		}
	}
}).mount("main")
