// отримати зі сховища - якщо є юзер
export function getFavorites(userId) {
  return JSON.parse(localStorage.getItem(`favorites_${userId}`)) || [];
}

// записати у сховище з такою назвою, та якщо є юзер
export function saveFavorites(userId, favorites) {
  localStorage.setItem(`favorites_${userId}`, JSON.stringify(favorites));
}

export function toggleFavorites(userId, teacherId) {
  const favorites = getFavorites(userId);
  const favoriteIndex = favorites.indexOf(teacherId);

  if (favoriteIndex === -1) {
    favorites.push(teacherId);
  } else {
    favorites.splice(favoriteIndex, 1);
  }

  saveFavorites(userId, favorites);

  return favorites;
}

export function isFavorites(userId, teacherId) {
  const favorites = getFavorites(userId);

  return favorites.includes(teacherId);
}
