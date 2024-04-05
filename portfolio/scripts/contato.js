const nameForm = document.querySelector("#name-form");

nameForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const messageInput = document.querySelector("#message");

    // Criar objeto com os dados do formulário
    const newMessage = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value
    }

    // Recuperar mensagens existentes do localStorage
    let messages = JSON.parse(localStorage.getItem("messages")) || [];

    // Adicionar nova mensagem ao array de mensagens
    messages.push(newMessage);

    // Salvar o array de mensagens atualizado no localStorage
    localStorage.setItem("messages", JSON.stringify(messages));

    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

});