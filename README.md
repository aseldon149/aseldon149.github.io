# Anthony Seldon Portfolio Website

## Description

This project is a personal portfolio website created using HTML5, CSS3, and JavaScript. The website introduces visitors to who I am, highlights projects I have completed, and provides a contact form for communication.

The purpose of this project is to demonstrate my understanding of web development fundamentals, responsive design, JavaScript programming, DOM manipulation, and browser storage.

## Features

- Personal introduction and About Me section
- Navigation menu for easy page access
- Skills and Technologies list
- Featured Content section
- Dynamic project display
- Project information stored using JavaScript objects
- Project information stored using sessionStorage
- Responsive design
- Welcome modal
- Dark Mode
- Saved Dark Mode preference using localStorage
- Contact form for visitor inquiries
- Submit button confirmation message
- Submit button tooltip
- Semantic HTML5 structure

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- DOM manipulation
- localStorage
- sessionStorage
- Git
- GitHub
- GitHub Pages

## Dependencies

This project does not require any external software libraries or packages.

A modern web browser with JavaScript enabled is required to use the interactive features of the website.

The project uses standard HTML5, CSS3, and JavaScript features, including the DOM, localStorage, and sessionStorage.

## Website Structure

### Home Page

The homepage welcomes visitors and provides navigation to different sections of the portfolio.

### About Me

This section contains information about my background and current web development learning journey. It also displays a list of skills and technologies using JavaScript.

### Featured Content

This section provides university resources and personal project links. JavaScript conditional logic determines which content is displayed based on the number of projects.

### Projects

The Projects section dynamically displays project information using JavaScript objects and an array. Each project contains a title, summary, image, and repository link.

Project information is converted to JSON using `JSON.stringify()` and stored using `sessionStorage`. When the page loads, the information is retrieved using `sessionStorage.getItem()` and converted back into JavaScript objects using `JSON.parse()`.

JavaScript DOM manipulation is then used to dynamically create the project cards and display the project information on the page.

### Contact

The Contact section contains a form that allows visitors to submit their name, email address, subject, and message.

JavaScript is used to prevent the form from refreshing the page and display a confirmation message when the form is submitted.

## JavaScript Functionality

JavaScript is used to add interactive features to the portfolio.

The project information is stored in JavaScript objects and placed into an array. The project array is stored in `sessionStorage` using JSON.

The project cards are dynamically created using JavaScript DOM manipulation.

JavaScript is also used for:

- Welcome modal
- Conditional logic
- Skills list generation
- Dark Mode
- localStorage
- sessionStorage
- JSON.stringify()
- JSON.parse()
- Project object creation
- Dynamic project cards
- Contact form interaction
- Submit button confirmation
- Tooltip functionality

## Installation

To run this project locally:

1. Clone the repository:

`git clone https://github.com/aseldon149/aseldon149.github.io.git`

2. Open the project folder.

3. Open the `index.html` file in a web browser.

A modern web browser with JavaScript enabled is recommended for the interactive features.

## Deployment

This website is hosted using GitHub Pages.

To view the live site, visit:

https://aseldon149.github.io/

## Projects

### Personal Blog Website

A personal blog website created using HTML and CSS. The project demonstrates webpage structure, navigation, responsive design, and contact forms.

Repository:

https://github.com/aseldon149/aseldon149

### The Storefront

A storefront website project demonstrating web design, page structure, styling, and user-friendly website navigation.

Repository:

https://github.com/aseldon149/the-storefront

### Future Project

A placeholder project that will be replaced with another project as I continue developing my web development skills.

## Browser Storage

This project uses two types of browser storage.

### localStorage

`localStorage` is used to save the user's Dark Mode preference. This allows the selected theme to remain enabled when the page is refreshed.

### sessionStorage

`sessionStorage` is used to store the project information during the browser session.

The project array is converted into JSON using `JSON.stringify()` before being stored. When the information is retrieved, `JSON.parse()` converts the JSON data back into JavaScript objects.

## Responsive Design

The website uses CSS media queries to provide different layouts for:

- Mobile devices
- Tablets
- Desktop computers

The project cards adjust their layout based on the screen size.

## Future Improvements

- Add additional portfolio projects
- Add actual project screenshots
- Replace placeholder project images with project screenshots
- Connect the contact form to a backend service
- Continue improving the website design
- Add additional interactive JavaScript features

## Author

Anthony Seldon

## Acknowledgements

This project was completed as part of the ECPI University Web Design course and was developed using HTML5, CSS3, and JavaScript concepts learned throughout the class.
