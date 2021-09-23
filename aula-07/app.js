var carta1 = {
    nome: "Bulbasauro",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina, cartaJogador;

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    const btnSortear = document.getElementById("btnSortear");
    const btnJogar = document.getElementById("btnJogar");
    btnJogar.disabled = false;
    btnSortear.disabled = true;
    console.log(cartaJogador);
    exibirOpcoes();
}

function exibirOpcoes() {
    const opcoes = document.getElementById("opcoes");
    var opcoesText = ""

    for (var atributo in cartaJogador.atributos) {
        opcoesText = "<input type='radio' name='atributo' value=" + atributo + ">" + atributo;
        opcoes.innerHTML += opcoesText;
    }
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value;
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var elementoResultado = document.getElementById("resultado");
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
    console.log(valorCartaJogador);
    console.log(valorCartaMaquina);
    
    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = "<p>Você venceu :)</p>";
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "<p>Você perdeu, a carta da máquina é maior</p>";
    } else {
        elementoResultado.innerHTML = "<p>Empatou</p>";
    }

    console.log(cartaMaquina);
}
