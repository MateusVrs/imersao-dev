var rafa = { nome: "Rafa", wins: 0, ties: 0, defeats: 0, points: 0 };
var paulo = { nome: "Paulo", wins: 0, ties: 0, defeats: 0, points: 0 };
var gui = { nome: "Gui", wins: 0, ties: 0, defeats: 0, points: 0 };

var jogadores = [rafa, paulo, gui];

var tipos = { win: 0, tie: 1, defeat: 2 };

function calculaPontos(jogador) {
    var pontos = 3 * jogador.wins + jogador.ties;
    jogador.points = pontos;
}

function exibeJogador(jogadores) {
    const elementoTbody = document.getElementById("tabelaJogadores");
    var elemento = "";
    for (let i = 0; i < jogadores.length; i++) {
        calculaPontos(jogadores[i]);
        elemento += "<tr>\
                        <td>" + jogadores[i].nome + "</td>\
                        <td>" + jogadores[i].wins + "</td>\
                        <td>" + jogadores[i].ties + "</td>\
                        <td>" + jogadores[i].defeats + "</td>\
                        <td>" + jogadores[i].points + "</td>\
                        <td><button onClick='mudarEstado(" + tipos.win + "," + i + ")'>Vitória</button></td>\
                        <td><button onClick='mudarEstado(" + tipos.tie + "," + i + ")'>Empate</button></td>\
                        <td><button onClick='mudarEstado(" + tipos.defeat + "," + i + ")'>Derrota</button></td>\
                    </tr>";
    }
    elementoTbody.innerHTML = elemento;
}

function mudarEstado(tipo, index) {
    var jogador = jogadores[index];
    if (tipo == tipos.win)
        jogador.wins++;
    else if (tipo == tipos.tie)
        jogador.ties++;
    else if (tipo == tipos.defeat)
        jogador.defeats++;

    if (tipo != tipos.defeat) {
        calculaPontos(jogador);
    }
    exibeJogador(jogadores);
}

exibeJogador(jogadores);
