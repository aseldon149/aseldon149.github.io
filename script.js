
// Prompt the visitor to enter their name.
let userName = prompt("What is your name?");

// Locate the welcome message on the webpage.
let welcomeMessage = document.getElementById("welcome-message");

// Update the message with the visitor's name.
if (userName) {
    welcomeMessage.textContent =
        "Welcome to my portfolio, " + userName + "!";
} else {
    welcomeMessage.textContent =
        "Welcome to my portfolio!";
}

