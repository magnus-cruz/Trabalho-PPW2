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

// Validador de cor
corInput.addEventListener('input', function() {
    const cor = corInput.value.toLowerCase(); // Converte para minúsculas
    if (cor === 'vermelho' || cor === 'red') {
        cartao.style.backgroundColor = 'red'; // Muda a cor de fundo
    } else {
        cartao.style.backgroundColor = ''; // Reseta a cor se não for vermelho
    }
});

// Botão "Modo Especial"
modoEspecialBtn.addEventListener('click', function() {
    cartao.classList.toggle('estilo-premium'); // Adiciona ou remove a classe
});