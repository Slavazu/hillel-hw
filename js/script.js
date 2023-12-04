document.addEventListener('DOMContentLoaded', () => {
  const favoritesList = document.querySelector('#favoritesList');
  const addItemForm = document.querySelector('#addItemForm');
  const newItemInput = document.querySelector('#newItemInput');

  const removeFromLocalStorage = (item) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.indexOf(item);
    if (index !== -1) {
      favorites.splice(index, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  const createListItem = (item) => {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = item;
    return listItem;
  };

  const createRemoveButton = (item, listItem) => {
    const removeButton = document.createElement('button');
    removeButton.className = 'btn btn-danger btn-sm float-end';
    removeButton.textContent = 'Удалить из избранного';
    removeButton.addEventListener('click', () => {
      removeFromLocalStorage(item);
      favoritesList.removeChild(listItem);
    });
    return removeButton;
  };

  const addToFavorites = (item) => {
    const listItem = createListItem(item);
    const removeButton = createRemoveButton(item, listItem);

    listItem.appendChild(removeButton);
    favoritesList.prepend(listItem);
  };

  const addToLocalStorage = (item) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(item);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const loadFavoritesFromLocalStorage = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.forEach(addToFavorites);
  };

  loadFavoritesFromLocalStorage();

  addItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = newItemInput.value.trim();
    if (newItem !== '') {
      addToFavorites(newItem);
      addToLocalStorage(newItem);
      newItemInput.value = '';
    }
  });
});
