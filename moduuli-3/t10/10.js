// Get the elements
const form = document.querySelector('#source');
const result = document.querySelector('#target');

// Form submit event listener
form.addEventListener('submit', (event) => {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values of the first name and last name input fields
    const firstName = document.querySelector('[name="firstname"]').value;
    const lastName = document.querySelector('[name="lastname"]').value;

    // Render the full name in the result p element
    result.textContent = `Your name is ${firstName} ${lastName}`;
});