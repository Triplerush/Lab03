const fs = require('fs')
const path = require('path')
const express = require('express')
const bp = require('body-parser')
const MarkdownIt = require('markdown-it'),
	md = new MarkdownIt();
const app = express()

app.use(express.static('pub'))
app.use(bp.json())
app.use(bp.urlencoded({
	extended: true
}))

app.listen(3000, () => {
	console.log("Escuchando en: http://localhost:3000")
})

app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'index.html'))
})

app.post('/crear', (request, response) => {
	let markDownText = request.body.text
	console.log(markDownText)
	let htmlText = md.render(markDownText)
	console.log(htmlText)
	response.setHeader('Content-Type', 'application/json')
	response.end(JSON.stringify({
		text: htmlText
	}))
})
