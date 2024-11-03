var botaoDesistir = document.querySelector(".desistir");

botaoDesistir.addEventListener("click", function() {
    window.close();
});

var botaoNovoJogo = document.querySelector(".novoJogo");

botaoNovoJogo.addEventListener("click", function() {
    location.reload();
});