
    // JavaScript code to toggle the navigation

// Get the elements
const menuIcon = document.querySelector('.menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');
const linksCloseDiv = document.querySelector('.links-close-div');

// Function to open the menu
menuIcon.addEventListener('click', () => {
    linksCloseDiv.classList.add('active'); // Add the active class
});

// Function to close the menu
closeMenuIcon.addEventListener('click', () => {
    linksCloseDiv.classList.remove('active'); // Remove the active class
});
