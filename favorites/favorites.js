// Add click event listener to all heart icons
document.addEventListener('DOMContentLoaded', function () {
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
        icon.addEventListener('click', () => {
            favorites[cardId] = !favorites[cardId];
            localStorage.setItem('favorites', JSON.stringify(favorites));
            toggleFavorite(icon);
        });
    });
});
