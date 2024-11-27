// Seleção dos elementos do modal
const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');
const downloadButton = document.getElementById('download-btn');

// Link para o arquivo
const fileUrl = 'https://drive.google.com/uc?export=download&id=1Up4tnVr90qpsD-Eo9_sEI-XEA4tUkHrQ'; // Ajuste o ID conforme necessário

// Exibe o modal ao clicar em "Contato"
contactLink.addEventListener('click', () => {
    contactModal.style.display = 'flex'; // Mostra o modal
});

// Fecha o modal ao clicar no botão de fechar
closeModal.addEventListener('click', () => {
    contactModal.style.display = 'none'; // Esconde o modal
});

// Fecha o modal ao clicar fora do conteúdo do modal
window.addEventListener('click', (event) => {
    if (event.target === contactModal) {
        contactModal.style.display = 'none'; // Esconde o modal
    }
});

// Adiciona evento de clique ao botão de download
downloadButton.addEventListener('click', () => {
    const a = document.createElement('a');
    a.href = fileUrl;
    a.download = '';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
