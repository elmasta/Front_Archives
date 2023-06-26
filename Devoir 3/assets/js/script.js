/* Sélection des éléments HTML */
let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')
let jeans = document.getElementById("jeans")
let jeansList = document.getElementById("wrapedMenu")

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
    e.preventDefault()
    console.log(burger)
    burger.classList.toggle('open')
    ul.classList.toggle('open')
})

jeans.addEventListener('click', function(e) {
    e.preventDefault()
    console.log("ok")
    jeans.classList.toggle("open")
    jeansList.classList.toggle('open')
})