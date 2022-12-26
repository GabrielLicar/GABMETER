var retorno;
var pensive = "Feliz...";

function Pensando() {
    pensive = document.getElementById("pensado").value;
    console.log(pensive)
    
}

function carregando() {
    document.querySelector(".typing").textContent = pensive;
}