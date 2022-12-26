const form = document.getElementById('confirm');

var pensive = "Pensando...";
var sad = "Triste...";
var happy = "Feliz...";
var sleep = "Dormindo...";



form.onsubmit = function() {
    const sentiment = form.elements.sentiment.value;

    if (sentiment === 'pensive') {
        document.querySelector(".typing").textContent = pensive;
    } else if (sentiment === 'sad') {
       document.querySelector(".typing").textContent = sad;
    } else if (sentiment === 'happy') {
        document.querySelector(".typing").textContent = happy;
    } else if (sentiment === 'sleep') {
        document.querySelector(".typing").textContent = sleep;
    }
    
}

function carregando() {
    document.querySelector(".typing").textContent = happy;
}