// Seleção dos elementos do modal
const contactLink = document.getElementById('contact-link');
const contactModal = document.getElementById('contact-modal');
const closeModal = document.getElementById('close-modal');
const downloadButton = document.getElementById('download-btn');


//  validações para o link do WhatsApp
const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /iphone|ipad|android/.test(userAgent);

const phoneNumber = "5573991430073";
const message = "Olá, vim pela página de emissão e quero comprar um certificado digital.";
const encodedMessage = encodeURIComponent(message);

// Verifica se é celular ou desktop e envia o respectivo link para o dispositivo certo
const link = isMobile
    ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

// Atualiza o link do WhatsApp
const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink) {
    whatsappLink.href = link;
}

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
