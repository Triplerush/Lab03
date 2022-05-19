function recitar() {
  const url = 'http://localhost:3000/recitar'
 	fetch(url).then(
    response => response.json()
  ).then(
    data => {
      document.querySelector("#poema").innerHTML = data.text
    }
  )
}
