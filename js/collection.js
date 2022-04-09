const collection = Vue.createApp({
	data() {
		return {
			badges: {
				Drink: [{
					locked: true,
					url: "DawGo%20Stickers/drink1.png"
				}, {
					url: "DawGo%20Stickers/drink2.png"
				}, {
					url: "DawGo%20Stickers/drink3.png"
				}, {
					url: "DawGo%20Stickers/drink4.png"
				}, {
					url: "DawGo%20Stickers/drink5.png"
				}, {
					url: "DawGo%20Stickers/drink6.png"
				}],
				Food: []
			}
		}
	}
}).mount("main")
