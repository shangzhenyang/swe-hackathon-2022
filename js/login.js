(() => {
	let isSignupPage = false
	document.getElementById("submit-btn").onclick = () => {
		const email = document.getElementById("email").value
		const password = document.getElementById("password").value
		if (email === "lucyjoe@example.com" && password === "123456") {
			location.href = "map.html"
		} else {
			alert("Password incorrect.")
		}
		return false
	}
	document.getElementById("primary-alt-option").onclick = function () {
		isSignupPage = !isSignupPage
		if (isSignupPage) {
			this.innerText = "I have an account"
			document.getElementById("submit-btn").value = "Sign Up"
			document.getElementById("confirm-password").classList.remove("hidden")
		}
		else {
			this.innerText = "Sign Up"
			document.getElementById("submit-btn").value = "Login"
			document.getElementById("confirm-password").classList.add("hidden")
		}
	}
})()
