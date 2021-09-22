function adicionarFilme() {
    const campoFilmeFavorito = document.getElementById("filme");
    var valorFilmeFavorito = campoFilmeFavorito.value;

    if (valorFilmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(valorFilmeFavorito);
    } else {
        console.error("Esse não é um formato válido de imagem")
    }

    campoFilmeFavorito.value = "";
}

function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var listaFilmes = document.getElementById("listaFilmes");

    listaFilmes.innerHTML += elementoFilmeFavorito;
}
