// Select all elements with the class 'card'
const deli = document.querySelectorAll('.deli');

// Loop through each card
deli.forEach(deli => {
    // Add a click event listener to each card
    deli.addEventListener('click', () => {
        // Get the URL from the 'data-url' attribute
        const url = deli.getAttribute('data-url');
        // Redirect the user to the specified URL
        window.location.href = url;
    });
});
