
// --------------------------------------------------
// WELCOME MESSAGE
// --------------------------------------------------

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
// DYNAMIC PROJECT MESSAGE
// --------------------------------------------------

// Locate the Projects section.
let projectsSection =
    document.getElementById("projects");

// Create a new paragraph.
let newProjectMessage =
    document.createElement("p");

// Add text to the new paragraph.
newProjectMessage.textContent =
    "I am continuing to develop my JavaScript skills by creating interactive web projects.";

// Add the new paragraph to the Projects section.
projectsSection.appendChild(newProjectMessage);


// --------------------------------------------------
// MODIFY EXISTING ELEMENT
// --------------------------------------------------

// Locate the About section.
let aboutSection =
    document.getElementById("about");

// Change the border of the About section.
aboutSection.style.border =
    "2px solid #333";


// --------------------------------------------------
// DARK MODE
// --------------------------------------------------

// Locate the Dark Mode checkbox.
let darkMode =
    document.getElementById("darkMode");

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

// Locate the contact form.
let contactForm =
    document.getElementById("contact-form");

// Listen for the form submission.
contactForm.addEventListener("submit", function (event) {

    // Prevent the form from refreshing the page.
    event.preventDefault();

    // Create a loading message.
    let statusMessage =
        document.createElement("p");

    // Display the loading message.
    statusMessage.textContent =
        "Sending message...";

    // Add the loading message to the form.
    contactForm.appendChild(statusMessage);

    // Wait 3 seconds before displaying the confirmation.
    setTimeout(function () {

        // Replace the loading message.
        statusMessage.textContent =
            "Message sent successfully!";

    }, 3000);

});
