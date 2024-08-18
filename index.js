// Select all elements with the class 'card'
const card = document.querySelectorAll('.card');

// Loop through each card
card.forEach(card => {
    // Add a click event listener to each card
    card.addEventListener('click', () => {
        // Get the URL from the 'data-url' attribute
        const url = card.getAttribute('data-url');
        // Redirect the user to the specified URL
        window.location.href = url;
    });
});
