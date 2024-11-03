var botaoSalvarCarregar = document.querySelector(".salvarCarregar");

botaoSalvarCarregar.addEventListener("click", function() {
    var campoAdicionar = document.querySelector(".campoTexto");
    // EXIBE ALERTA SE O TEXTAREA ESTIVER VAZIO AO CLICAR NO BOTÃO "SALVAR E COMEÇAR"
    if(campoAdicionar.value.length == 0) {
        alert("Número de letras incorreto, adicione uma palavra com até 8 letras");
        campoAdicionar.focus();
    } else {
        // ADICIONA A NOVA PALAVRA AO JOGO
        alert("Palavra adicionada!");
        palavras.push(campoAdicionar.value.toUpperCase());
        location.reload();
        console.log(palavras);
    }   
})

var botaoCancelar = document.querySelector(".cancelar");
botaoCancelar.addEventListener("click", function() {
    location.reload();
});


