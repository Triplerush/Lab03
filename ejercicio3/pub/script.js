function recitar(markupText) {
    const url = 'http://localhost:3000/crear'
	const data = {
		text: markupText
	}
	
	const request = {
		method: 'POST', // Podría ser GET
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	}
	fetch(url, request).then(
		response => response.json()
	).then(
		data => {  
			document.querySelector("#htmlCode").innerHTML = data.text
			document.querySelector("#htmlCode").innerHTML += '<button onclick=formView()>Regresar</button>'
		}
	)
}

function formView(){
	html =  `
			<form id="markupForm">
				<h2>Ingrese el texto</h2>
				<textarea id="markupText" rows="10" cols="50"></textarea>
				<input type="submit">
  			</form>

	`

	document.querySelector("#htmlCode").innerHTML = html
	createMarkdown()

}
function createMarkdown(){
	const text = document.querySelector('#markupText')
    document.querySelector('#markupForm').onsubmit = () => {
		recitar(text.value)
	  	return false;
	}
}

document.addEventListener('DOMContentLoaded', function() {
	formView()
	}
)
