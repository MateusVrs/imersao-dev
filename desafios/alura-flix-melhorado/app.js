var numberOfFilmes = 0;
function adicionarFilme() {
    const campoFilmeFavorito = document.getElementById("filme");
    const campoNomeFilme = document.getElementById("nome-filme");
    var valorFilmeFavorito = campoFilmeFavorito.value;
    var valorNomeFilme = campoNomeFilme.value;

    if (valorFilmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(valorFilmeFavorito, valorNomeFilme);
        numberOfFilmes++;
    } else {
        console.error("Esse não é um formato válido de imagem")
    }

    campoFilmeFavorito.value = "";
    campoNomeFilme.value = "";
}

function listarFilmesNaTela(filme, nome) {
    var newDivFilme = "<div class=each-film></div>";
    var elementoNomeFilme = "<h2 class=film-name>" + nome + "</h2>";
    var elementoFilmeFavorito = "<img class=img-film src=" + filme + ">";
    var listaFilmes = document.getElementById("listaFilmes");

    listaFilmes.innerHTML += newDivFilme;
    const divFilme = document.querySelectorAll(".each-film").item(numberOfFilmes);
    divFilme.innerHTML += elementoNomeFilme;
    divFilme.innerHTML += elementoFilmeFavorito;
}

function excluirFilme() {
    const listaImgFilmes = document.querySelectorAll(".each-film");
    const campoIndexFilme = document.getElementById("delete-filme");
    var indexFilme = parseInt(campoIndexFilme.value);

    listaImgFilmes.item(indexFilme - 1).remove();
    campoIndexFilme.value = "";
}
