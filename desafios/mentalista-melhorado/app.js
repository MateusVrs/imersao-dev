var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;

function ZerarJogo() {
    numeroSecreto = parseInt(Math.random() * 11);
    tentativas = 3;
}

function Chutar() {
    const chute = parseInt(document.getElementById('valor').value);
    const elementoResultado = document.getElementById('resultado');
    tentativas--;

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou, tente novamente :)";
        ZerarJogo();
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10.";
    } else {
        if (tentativas > 0) {
            elementoResultado.innerHTML = "Você errou e tem mais " + tentativas + " tentativas.";
            if (chute < numeroSecreto) {
                elementoResultado.innerHTML += "<br> O número secreto é maior que esse."
            } else {
                elementoResultado.innerHTML += "<br> O número secreto é menor que esse."
            }
        } else {
            elementoResultado.innerHTML = "Você errou, o número secreto era " + numeroSecreto + ". Tente novamente :)";
            ZerarJogo();
        }
    }
}
