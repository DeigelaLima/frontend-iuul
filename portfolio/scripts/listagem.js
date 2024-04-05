const nameForm = document.querySelector("#name-form");

// Função para limpar todas as mensagens de contato
function limparMensagens() {
    // Limpar o LocalStorage
    localStorage.removeItem("messages");

    // Limpar as mensagens exibidas na página
    const messagesContainer = document.querySelector("#messages-container");
    messagesContainer.innerHTML = ""; // Limpar o conteúdo do container

}

// Adicionar um ouvinte de evento para o clique do botão de limpar mensagens
const clearMessagesBtn = document.querySelector("#clear-messages-btn");
clearMessagesBtn.addEventListener("click", limparMensagens);


function exibirMensagens() {
    const messagesContainer = document.querySelector("#messages-container");

    // Recuperar mensagens do localStorage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];
    console.log(messages)

    // Exibir as mensagens na página
    messages.forEach((message, index) => {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message");

        messageElement.innerHTML = `
            <div class="card w-100 mb-3">
                <div class="card-body">
                    <h5 class="card-title">${message.name}</h5>
                    <h6 class="card-title">${message.email}</h6>
                    <p class="card-text">${message.message}</p>
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
    });
}

// Chamar a função para exibir mensagens quando a página for carregada
window.addEventListener("DOMContentLoaded", exibirMensagens);
