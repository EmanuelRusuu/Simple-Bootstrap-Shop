document.addEventListener('DOMContentLoaded', function () {
    // Retrieve favorites from local storage and parse the JSON
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');

    // Loop through the heart icons and update their state based on the favorites in local storage
    const heartIcons = document.querySelectorAll('.bi-heart');
    heartIcons.forEach((icon) => {
        const cardId = icon.closest('.card').getAttribute('data-id');
        if (favorites[cardId]) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
            icon.style.color = 'red';
        } else {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
            icon.style.color = '';
        }
    });

    // Display the favorites
    displayFavorites(favorites);
});
