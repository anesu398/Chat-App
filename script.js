function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value;

    if (message.trim() !== "") {
        var chatWindow = document.getElementById("chatWindow");
        var messageElement = document.createElement("div");
        messageElement.textContent = message;
        chatWindow.appendChild(messageElement);

        // Clear input field
        messageInput.value = "";

        // Scroll to the bottom of the chat window
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}
