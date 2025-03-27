document.getElementById("submit").addEventListener("click", function() {
    let recipient = document.getElementById("recipient").value.trim();
    let message = document.getElementById("message").value.trim();
    let color = document.getElementById("color").value;
    let font = document.getElementById("font").value;

    if (!recipient || !message) {
        alert("Please enter recipient and message.");
        return;
    }

    let newEnvelope = document.createElement("div");
    newEnvelope.classList.add("envelope");
    newEnvelope.style.backgroundColor = color;
    newEnvelope.style.fontFamily = font;
    newEnvelope.innerHTML = `<span class="heart">❤️</span> <br> To: ${recipient}`;
    newEnvelope.addEventListener("click", function() {
        alert(`Message for ${recipient}: ${message}`);
    });

    document.getElementById("envelope-container").appendChild(newEnvelope);
    document.getElementById("recipient").value = "";
    document.getElementById("message").value = "";
});

// Search Feature
document.getElementById("search").addEventListener("input", function() {
    let searchValue = this.value.trim().toLowerCase();
    let envelopes = document.querySelectorAll(".envelope");

    envelopes.forEach(env => {
        let recipient = env.innerText.split("To: ")[1]?.trim().toLowerCase();
        env.style.display = (recipient === searchValue) ? "block" : "none";
    });
});

// Premium Upgrade Feature (with Stripe fix)
document.getElementById("upgrade").addEventListener("click", function() {
    let recipient = document.getElementById("recipient").value.trim();
    let message = document.getElementById("message").value.trim();
    let color = document.getElementById("color").value;
    let font = document.getElementById("font").value;

    if (!recipient || !message) {
        alert("Enter recipient and message before upgrading.");
        return;
    }

    // Redirect to Stripe payment
    window.location.href = "https://buy.stripe.com/test_5kA6oD0x12345"; // Replace with actual Stripe link
});
