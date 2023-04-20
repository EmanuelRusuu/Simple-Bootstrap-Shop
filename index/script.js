function updateHeartIcons() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

    const cards = document.querySelectorAll('.card');
    cards.forEach((card) => {
        const id = card.getAttribute('data-id');
        const heartIcon = card.querySelector('.bi-heart');

        if (favorites[id]) {
            heartIcon.classList.add('red-heart');
            heartIcon.classList.remove('bi-heart');
            heartIcon.classList.add('bi-heart-fill');
            heartIcon.style.color = 'red';
        } else {
            heartIcon.classList.remove('red-heart');
            heartIcon.classList.remove('bi-heart-fill');
            heartIcon.classList.add('bi-heart');
            heartIcon.style.color = '';
        }
    });
}

window.addEventListener('load', () => {
    updateHeartIcons();
});

function toggleFavorite(heartIcon) {
    const card = heartIcon.closest('.card');
    const id = card.getAttribute('data-id');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};

    if (favorites[id]) {
        delete favorites[id];
        heartIcon.classList.remove('red-heart');
        removeFromFavorites(id, heartIcon);
    } else {
        favorites[id] = true;
        heartIcon.classList.add('red-heart');
        addToFavorites(id, heartIcon);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateHeartIcons();
}

function addToFavorites(cardId, icon) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    favorites[cardId] = true;
    localStorage.setItem('favorites', JSON.stringify(favorites));

    icon.classList.remove('bi-heart');
    icon.classList.add('bi-heart-fill');
    icon.style.color = 'red';
}

function removeFromFavorites(cardId, icon) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    delete favorites[cardId];
    localStorage.setItem('favorites', JSON.stringify(favorites));

    icon.classList.remove('bi-heart-fill');
    icon.classList.add('bi-heart');
    icon.style.color = '';
}
