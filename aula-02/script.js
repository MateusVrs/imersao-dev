function Converter() {
    const valorElement = document.getElementById("valor");
    var valor = parseFloat(valorElement.value);
    var valorEmReal = valor * 5.2;
    
    const valorConvertidoElement = document.getElementById("valorConvertido");
    var fraseResultado;
    if (isNaN(valor)) {
        fraseResultado = "Coloque um valor válido";
    } else {
        fraseResultado = "O valor em real é R$ " + valorEmReal;
    }
    valorConvertidoElement.innerHTML = fraseResultado;
}
