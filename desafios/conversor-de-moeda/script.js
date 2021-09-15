function Converter() {
    const valorElement = document.getElementById("valor");
    const tipoMoedaSelect = document.getElementById("tipo-moedas");
    var tipoMoeda = tipoMoedaSelect.value;

    var valor = parseFloat(valorElement.value);
    var valorFinal = valor;
    if (tipoMoeda == "dólar") {
        valorFinal *= 5.2;
    } else if (tipoMoeda == "libra") {
        valorFinal *= 7.1;
    }

    const valorConvertidoElement = document.getElementById("valorConvertido");
    var fraseResultado;
    if (isNaN(valor) || tipoMoeda == "") {
        fraseResultado = "Coloque um valor válido";
    } else {
        fraseResultado = "O valor em " + tipoMoeda + " é " + valorFinal.toFixed(2);
    }
    valorConvertidoElement.innerHTML = fraseResultado;
}
