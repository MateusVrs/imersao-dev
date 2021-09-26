var carta1 = {
    nome: "Bulbasauro",
    imagem: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

var carta2 = {
    nome: "Darth Vader",
    imagem: "https://i.pinimg.com/originals/ee/b9/24/eeb924e1b00d3cd8f71421d23eaa0c4d.jpg",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

var carta3 = {
    nome: "Shiryu de dragão",
    imagem: "https://i.pinimg.com/originals/f5/08/64/f50864fc85dc9647ec4294a9c7d3ffb2.jpg",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

var cartas = [carta1, carta2, carta3];
var cartaMaquina, cartaJogador;

const btnSortear = document.getElementById("btnSortear");
const btnJogar = document.getElementById("btnJogar");

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];

    var numeroCartaJogador = parseInt(Math.random() * 3);
    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }
    cartaJogador = cartas[numeroCartaJogador];

    btnJogar.disabled = false;
    btnSortear.disabled = true;
    exibirCartaJogador();
}

function exibirCartaJogador(){
    const divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagOpcoes = "<div id='opcoes' class='carta-status'>";

    var opcoesText = ""
    for (var atributo in cartaJogador.atributos) {
        opcoesText += "<input type='radio' name='atributo' value=" + atributo + ">" + atributo.charAt(0).toLocaleUpperCase() + atributo.slice(1) + ": " + cartaJogador.atributos[atributo] + "<br>";
    }
    var nome = `<p class='carta-subtitle'> ${cartaJogador.nome}</p>`;
    divCartaJogador.innerHTML = moldura + nome + tagOpcoes + opcoesText + "</div>";
}


function exibitCartaMaquina() {
    const divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    var moldura = "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style=' width: inherit; height: inherit; position: absolute;'>";
    var tagOpcoes = "<div id='opcoes' class='carta-status'>";

    var opcoesText = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesText += "<p>" + atributo.charAt(0).toLocaleUpperCase() + atributo.slice(1) + ": " + cartaMaquina.atributos[atributo] + "<br>";
    }
    var nome = `<p class='carta-subtitle'> ${cartaMaquina.nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nome + tagOpcoes + opcoesText + "</div>";
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

    if (valorCartaJogador) {
        if (valorCartaJogador > valorCartaMaquina) {
            elementoResultado.innerHTML = "<p class='resultado-final'>Você venceu :)</p>";
        } else if (valorCartaJogador < valorCartaMaquina) {
            elementoResultado.innerHTML = "<p class='resultado-final'>Você perdeu, a carta da máquina é maior</p>";
        } else {
            elementoResultado.innerHTML = "<p class='resultado-final'>Empatou</p>";
        }
        btnJogar.disabled = true;
        exibitCartaMaquina();
    } else {
        elementoResultado.innerHTML = "<p class='resultado-final'>Escolha um atributo</p>";
    }
}
