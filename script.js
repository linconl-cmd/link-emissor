 // Link para o arquivo
 const fileUrl = 'https://drive.google.com/uc?export=download&id=1Up4tnVr90qpsD-Eo9_sEI-XEA4tUkHrQ';
 
 // Substitua pelo link do seu arquivo

 // Seleciona o botão
 const downloadButton = document.getElementById('download-btn');

 // Adiciona evento de clique
 downloadButton.addEventListener('click', () => {
     // Cria um elemento de link (âncora)
     const a = document.createElement('a');
     a.href = fileUrl;
     a.download = ''; // Define que é para baixar
     a.style.display = 'none'; // Esconde o elemento

     // Adiciona ao documento
     document.body.appendChild(a);

     // Simula o clique no link
     a.click();

     // Remove o elemento
     document.body.removeChild(a);
 });