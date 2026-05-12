// Seleciona os elementos do DOM
const nomeInput = document.getElementById('nome');
const corInput = document.getElementById('cor');
const cartao = document.getElementById('cartao');
const nomeCartao = document.getElementById('nome-cartao');
const modoEspecialBtn = document.getElementById('modo-especial');

// Atualização em tempo real do nome no cartão
nomeInput.addEventListener('input', function() {
    nomeCartao.textContent = nomeInput.value || 'Nome do Usuário'; // Atualiza o nome ou reseta se vazio
});

// Aplica qualquer cor CSS válida, incluindo rgb(), hex e nomes de cores
function corValida(cor) {
    const teste = document.createElement('option');
    teste.style.color = '';
    teste.style.color = cor;
    return teste.style.color !== '';
}

corInput.addEventListener('input', function() {
    const cor = corInput.value.trim();

    if (!cor) {
        cartao.style.backgroundColor = '';
        return;
    }

    if (corValida(cor)) {
        cartao.style.backgroundColor = cor;
    }
});

// Botão "Modo Especial"
modoEspecialBtn.addEventListener('click', function() {
    cartao.classList.toggle('estilo-premium'); // Adiciona ou remove a classe
});