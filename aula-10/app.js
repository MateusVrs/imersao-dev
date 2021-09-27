const projetosLi = document.querySelectorAll(".projects ul li")
for (let i = 0; i < projetosLi.length; i++) {
    projetosLi.item(i).classList.add("projeto-item") 
}

function mudaTema() {
    document.body.classList.toggle("dark")
}