const card = document.querySelectorAll('.card');
card.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        window.location.href = url;
    });
});
const food = document.querySelectorAll('.food');
food.forEach(food => {
    const url = food.getAttribute('data-img-url');
    food.style.backgroundImage = `url(${url})`;
    food.style.backgroundSize = 'cover'; 
    food.style.backgroundRepeat = 'no-repeat'; 
});

