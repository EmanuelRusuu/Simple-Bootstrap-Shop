function addToFavorites(cardId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    favorites[cardId] = true;
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function removeFromFavorites(cardId) {
    console.log('Removing item with ID:', cardId);
    const favorites = JSON.parse(localStorage.getItem('favorites') || '{}');
    delete favorites[cardId];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Favorites after removal:', favorites);
}

function toggleFavorite(icon) {
    const card = icon.closest('.card');
    const cardId = card.dataset.id;
    if (icon.classList.contains('bi-heart')) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
        icon.style.color = 'red';
        addToFavorites(cardId);
    } else {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
        icon.style.color = '';
        removeFromFavorites(cardId); // Call removeFromFavorites() here
    }
}
