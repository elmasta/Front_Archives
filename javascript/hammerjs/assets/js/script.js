const resultGeste = document.getElementById('resultGeste');

// create a simple instance
// by default, it only adds horizontal recognizers
const mc = new Hammer(resultGeste);

// listen to events...
mc.on("panleft panright panup pandown tap press", function(ev) {
    resultGeste.textContent = ev.type +" gesture detected.";
});