
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


// --------------------------------------------------
// CONDITIONAL LOGIC
// --------------------------------------------------

// Count the projects listed in the Projects section.
let projectCount = document.querySelectorAll(".project-card").length;

// Locate the Featured Content sections.
let universityResources =
    document.getElementById("university-resources");

let personalProjects =
    document.getElementById("personal-projects");

// Display content based on the number of projects.
if (projectCount < 3) {
    universityResources.style.display = "block";
    personalProjects.style.display = "block";
} else {
    universityResources.style.display = "none";
    personalProjects.style.display = "block";
}


// --------------------------------------------------
// LOOP
// --------------------------------------------------

// Create an array containing skills and technologies.
let skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Git",
    "GitHub"
];

// Locate the skills list in the About section.
let skillsList = document.getElementById("skills-list");

// Use a for loop to display each skill as a bullet point.
for (let i = 0; i < skills.length; i++) {

    let listItem = document.createElement("li");

    listItem.textContent = skills[i];

    skillsList.appendChild(listItem);
}


// --------------------------------------------------
// DARK MODE
// --------------------------------------------------

// Locate the Dark Mode checkbox.
let darkMode = document.getElementById("darkMode");

// Listen for changes to the Dark Mode checkbox.
darkMode.addEventListener("change", function () {

    // Add or remove the dark-mode class.
    if (darkMode.checked) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

});


// --------------------------------------------------
// CONTACT FORM INTERACTIVITY
// --------------------------------------------------

// Locate the Submit button.
let submitButton = document.getElementById("submit-button");

// Add a click event listener to the Submit button.
submitButton.addEventListener("click", function (event) {

    // Prevent the form from refreshing the page.
    event.preventDefault();

    // Get the name entered in the contact form.
    let contactName = document.getElementById("name").value;

    // Display a confirmation message.
    alert(
        "Thank you, " +
        contactName +
        ", your message has been sent!"
    );

});
