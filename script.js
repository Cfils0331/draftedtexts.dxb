let messages = [];

function submitMessage() {
    let recipient = document.getElementById("recipient").value;
    let message = document.getElementById("message").value;
    let color = document.getElementById("color").value;
    let font = document.getElementById("font").value;

    if (recipient.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    let newMessage = {
        recipient: recipient,
        message: message,
        color: color,
        font: font,
        premium: false
    };

    messages.push(newMessage);
    displayMessages();
}

function upgradeEnvelope() {
    let recipient = document.getElementById("recipient").value;
    let message = document.getElementById("message").value;
    let color = document.getElementById("color").value;
    let font = document.getElementById("font").value;

    if (recipient.trim() === "" || message.trim() === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Fake payment (Stripe will be added later)
    let confirmPayment = confirm("Pay 3 DHS to upgrade this envelope?");
    if (!confirmPayment) return;

    let newMessage = {
        recipient: recipient,
        message: message,
        color: color,
        font: font,
        premium: true
    };

    messages.push(newMessage);
    displayMessages();
}

function displayMessages() {
    let messagesDiv = document.getElementById("messages");
    messagesDiv.innerHTML = "";

    messages.forEach((msg, index) => {
        let envelope = document.createElement("div");
        envelope.classList.add("envelope");
        if (msg.premium) envelope.classList.add("premium");
        envelope.style.background = msg.color;
        envelope.innerHTML = `<p>${msg.recipient}</p>`;
        envelope.onclick = () => openMessage(index);
        messagesDiv.appendChild(envelope);
    });
}

function openMessage(index) {
    let envelope = document.getElementsByClassName("envelope")[index];
    envelope.innerHTML = `<p style="font-family:${messages[index].font}">${messages[index].message}</p>`;
}

function searchMessages() {
    let query = document.getElementById("search").value.toLowerCase();
    let envelopes = document.getElementsByClassName("envelope");

    for (let i = 0; i < messages.length; i++) {
        let recipient = messages[i].recipient.toLowerCase();
        envelopes[i].style.display = recipient.includes(query) ? "block" : "none";
    }
}
