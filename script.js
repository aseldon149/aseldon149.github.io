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
// PROJECT OBJECTS
// --------------------------------------------------

// Create the first project object.
let project1 = {
    title: "Personal Blog Website",
    summary: "A personal blog website created using HTML and CSS. The project demonstrates webpage structure, navigation, responsive design, and contact forms.",
    imageURL: "https://via.placeholder.com/400x250?text=Personal+Blog",
    repositoryURL: "https://aseldon149.github.io/aseldon149/#home"
};


// Create the second project object.
let project2 = {
    title: "The Storefront",
    summary: "A storefront website project demonstrating web design, page structure, styling, and user-friendly website navigation.",
    imageURL: "https://via.placeholder.com/400x250?text=The+Storefront",
    repositoryURL: "https://aseldon149.github.io/the-storefront/"
};


// Create the third project object.
let project3 = {
    title: "Future Project",
    summary: "This is a placeholder for a future project that will be added as I continue developing my skills.",
    imageURL: "https://via.placeholder.com/400x250?text=Future+Project",
    repositoryURL: "https://github.com/aseldon149"
};


// Create an array containing all three project objects.
let projects = [
    project1,
    project2,
    project3
];


// --------------------------------------------------
// SESSION STORAGE
// --------------------------------------------------

// Check if project information already exists in sessionStorage.
let storedProjects = sessionStorage.getItem("projects");


// If no project information exists, store the project array.
if (storedProjects === null) {

    // Convert the project array to a JSON string.
    let projectData = JSON.stringify(projects);

    // Store the JSON string in sessionStorage.
    sessionStorage.setItem("projects", projectData);

} else {

    // Retrieve and convert the stored JSON back into JavaScript objects.
    projects = JSON.parse(storedProjects);

}


// --------------------------------------------------
// DYNAMIC PROJECT DISPLAY
// --------------------------------------------------

// Select the Projects container from the HTML.
let projectsContainer =
    document.getElementById("projects-container");


// Loop through the project array.
for (let i = 0; i < projects.length; i++) {

    // Create the project article.
    let projectCard = document.createElement("article");

    projectCard.classList.add("project-card");


    // Create the project link.
    let projectLink = document.createElement("a");

    projectLink.href = projects[i].repositoryURL;
    projectLink.target = "_blank";


    // Create the project image.
    let projectImage = document.createElement("img");

    projectImage.src = projects[i].imageURL;
    projectImage.alt = projects[i].title + " project";


    // Add the image to the project link.
    projectLink.appendChild(projectImage);


    // Create the project title.
    let projectTitle = document.createElement("h3");

    projectTitle.textContent = projects[i].title;


    // Create the project summary.
    let projectSummary = document.createElement("p");

    projectSummary.textContent = projects[i].summary;


    // Add the project elements to the project card.
    projectCard.appendChild(projectLink);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectSummary);


    // Add the project card to the Projects section.
    projectsContainer.appendChild(projectCard);

}


// --------------------------------------------------
// CONDITIONAL LOGIC
// --------------------------------------------------

// Count the dynamically created project cards.
let projectCount =
    document.querySelectorAll(".project-card").length;


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
// SKILLS LOOP
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
let skillsList =
    document.getElementById("skills-list");


// Use a for loop to display each skill.
for (let i = 0; i < skills.length; i++) {

    let listItem = document.createElement("li");

    listItem.textContent = skills[i];

    skillsList.appendChild(listItem);

}


// --------------------------------------------------
// DARK MODE WITH LOCAL STORAGE
// --------------------------------------------------

// Locate the Dark Mode checkbox.
let darkMode =
    document.getElementById("darkMode");


// Check for a saved Dark Mode preference.
let savedDarkMode =
    localStorage.getItem("darkMode");


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
let submitButton =
    document.getElementById("submit-button");


// Add a click event listener to the Submit button.
submitButton.addEventListener("click", function (event) {

    // Prevent the form from refreshing the page.
    event.preventDefault();


    // Get the name entered in the contact form.
    let contactName =
        document.getElementById("name").value;


    // Display a confirmation message.
    alert(
        "Thank you, " +
        contactName +
        ", your message has been sent!"
    );

});
