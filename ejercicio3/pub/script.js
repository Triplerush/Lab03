function recitar(markupText) {
    const url = 'http://localhost:3000/'
	const data = {
		text: markupText
	}
	console.log(data)
	const request = {
		method: 'POST', // Podría ser GET
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	http = fetch(url, request)
	http.then(
		response => response.json()
	).then(
		data => {
            console.log(data)
			//document.querySelector("#htmlCode").innerHTML = data.text
		}
	)
}

document.addEventListener('DOMContentLoaded', function () {
	const text = document.querySelector('#markupText')
    document.querySelector('#markupForm').onsubmit = () => {
        recitar(text.value)
		return false;
	}
})

