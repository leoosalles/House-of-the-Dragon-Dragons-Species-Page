const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desativarBotaoSelecionado();

        destacarBotaoSelecionado(botao);

        ocultarImagemAtiva();

        exibirImagemFundo(indice);

        ocultarInformacoesAtivas();

        exibirInformacoes(indice);
    })
})

function destacarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function exibirInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function ocultarInformacoesAtivas() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function exibirImagemFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function ocultarImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
