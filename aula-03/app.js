var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
    const chute = parseInt(document.getElementById('valor').value);
    const elementoResultado = document.getElementById('resultado');

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou :)";
    } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Você errou";
    }
}