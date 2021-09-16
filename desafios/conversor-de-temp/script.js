function Converter() {
    const valorElement = document.getElementById("valor");
    const unitTempSelect = document.getElementById("unit-temp");
    var unitTemp = unitTempSelect.value;

    var valor = parseFloat(valorElement.value);
    var valorFinal = valor;
    if (unitTemp == "kelvin") {
        valorFinal += 273;
    } else if (unitTemp == "fahrenheit") {
        valorFinal = (1.8 * valorFinal) + 32;
    }

    const valorConvertidoElement = document.getElementById("valorConvertido");
    var fraseResultado;
    if (isNaN(valor) || unitTemp == "") {
        fraseResultado = "Coloque um valor válido";
    } else {
        fraseResultado = "O valor em " + unitTemp + " é " + valorFinal.toFixed(2);
    }
    valorConvertidoElement.innerHTML = fraseResultado;
}
