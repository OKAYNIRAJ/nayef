// chat.js - Enhanced Chat Functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.querySelector('.chat-messages');
    const sendButton = document.querySelector('.send-button');

    function addMessage(text, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${text}</p>
            </div>
            <span class="message-time">${time}</span>
        `;

        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = "message bot-message typing-indicator";
        typingDiv.innerHTML = `
            <div class="message-content">
                <p>...</p>
            </div>
        `;
        chatMessages.appendChild(typingDiv);
        scrollToBottom();
        return typingDiv;
    }

    function botResponse() {
        const typingIndicator = showTypingIndicator();

        setTimeout(() => {
            chatMessages.removeChild(typingIndicator); // Remove typing indicator
            addMessage("I understand. Can you tell me more about what's been bothering you?", false);
        }, 1000);
    }

    function handleSendMessage() {
        const message = chatInput.value.trim();
        if (message === "") return;

        addMessage(message, true);
        chatInput.value = '';

        setTimeout(botResponse, 500); // Simulate bot response delay
    }

    sendButton.addEventListener('click', handleSendMessage);

    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });
});
