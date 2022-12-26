var retorno;
var pensive = "Pensando...";

function Pensando() {
    pensive = document.getElementById("pensado").value;
    console.log(pensive)
    
}

function carregando() {
    document.querySelector(".typing").textContent = pensive;
}