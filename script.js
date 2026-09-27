// --------------------------------------------------
// WELCOME MODAL
// --------------------------------------------------

// Locate the welcome modal and Close button.
let welcomeModal = document.getElementById("welcome-modal");
let closeModal = document.getElementById("close-modal");

// Close the modal when the user clicks the Close button.
closeModal.addEventListener("click", function () {
    welcomeModal.style.display = "none";
});


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
// DARK MODE WITH LOCAL STORAGE
// --------------------------------------------------

// Locate the Dark Mode checkbox.
let darkMode = document.getElementById("darkMode");

// Check for a saved Dark Mode preference.
let savedDarkMode = localStorage.getItem("darkMode");

// Automatically apply Dark Mode if it was previously enabled.
if (savedDarkMode === "enabled") {

    document.body.classList.add("dark-mode");

    darkMode.checked = true;

}


// Listen for changes to the Dark Mode checkbox.
darkMode.addEventListener("change", function () {

    if (darkMode.checked) {

        // Turn on Dark Mode.
        document.body.classList.add("dark-mode");

        // Save the Dark Mode preference.
        localStorage.setItem("darkMode", "enabled");

    } else {

        // Turn off Dark Mode.
        document.body.classList.remove("dark-mode");

        // Save the Light Mode preference.
        localStorage.setItem("darkMode", "disabled");

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
