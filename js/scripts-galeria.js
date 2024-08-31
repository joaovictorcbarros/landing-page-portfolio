// Função para abrir o modal e exibir a imagem centralizada e botão fechar
function openModal(newSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    
    modal.style.display = "flex"; // Muda para flex para centralizar
    modalImg.src = newSrc; // Exibe a nova imagem no modal
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none"; 
}

// Um evento que chama a função para fechar o modal se clicar fora da imagem ou no X
window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
        closeModal(); 
    }
}

