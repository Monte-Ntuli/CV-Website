document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const status = document.getElementById("form-status");

    if (name && email && message) {
        status.textContent = "Thank you, " + name + ". Your message has been sent!";
        status.style.color = "green";
        this.reset();
    } else {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
    }
});