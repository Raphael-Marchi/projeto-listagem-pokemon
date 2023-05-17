const botaoalterartema = document.getElementById("botao-alterar-tema");// alterar tema claro para escuro ao clicar no botao
const body = document.querySelector("body");// pegar o elemento correspondente ao body
const ImagemBotaoAlterarTema = document.querySelector(".imagem-botao");
botaoalterartema.addEventListener("click", () => {
    const ModoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    body.classList.toggle("modo-escuro")
    if (ModoEscuroEstaAtivo) {
        ImagemBotaoAlterarTema.setAttribute("src", "./src/imagens/imagens/sun.png")
    }
    else {
        ImagemBotaoAlterarTema.setAttribute("src", "./src/imagens/imagens/moon.png")// trocar imagem botao alterar tema para a lua
    }
});

