var arrayFilmesImg = ["https://br.web.img3.acsta.net/medias/nmedia/18/95/59/60/20417256.jpg", "https://upload.wikimedia.org/wikipedia/pt/3/30/Star_Wars_Epis%C3%B3dio_1_Amea%C3%A7a_Fantasma.jpg", "https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg"];

var arrayFilmesLink = ["https://play.google.com/store/movies/details/Harry_Potter_e_a_Pedra_Filosofal?id=T64FAw-0Wj4.P", "https://www.disneyplus.com/pt-br/movies/star-wars-a-ameaca-fantasma-episodio-i/2ezYynkgW1AH", "https://www.disneyplus.com/pt-br/movies/the-avengers-os-vingadores-da-marvel-studios/2h6PcHFDbsPy"];

var arrayFilmesNomes = ["Harry Potter", "Star Wars", "Os Vingadores"];

const divFilmsContainer = document.querySelector(".films-container");

for (let i = 0; i < arrayFilmesNomes.length; i++) {
    divFilmsContainer.innerHTML += "<div class=one-film>";
    const divOneFilm = document.querySelectorAll(".one-film")[i];
    divOneFilm.innerHTML += "<a target=_blank href=" + arrayFilmesLink[i] + ">" + arrayFilmesNomes[i] + "</a>";
    divOneFilm.innerHTML += "<img src=" + arrayFilmesImg[i] + ">";
}
