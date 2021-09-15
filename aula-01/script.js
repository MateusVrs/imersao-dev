var nome = "Mateus";

var notaPrimeiroBimestre = 9;
var notaSegundoBimestre = 7;
var notaTerceiroBimestre = 4;
var notaQuartoBimestre = 2;

var media = 6;

var notaTotal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4;

console.log("Bem vindo " + nome);

const helloP = document.querySelector(".greeting");
const noteP = document.querySelector(".person-note");

window.helloP.innerText = "Bem vindo, " + nome;
window.noteP.innerText = "Sua nota final é " + notaTotal;
