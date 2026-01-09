import { fetchTeachers } from '../teachers/teachers-api';
import { getFavorites } from './favorites-storage';
import { renderFavorites } from './favorites-render';
import { initTeacherCardActions } from '../teachers/teacher-card-actions';

export async function initFavoritesPage(user) {
  const favoritesIds = getFavorites(user.uid);

  if (favoritesIds.length === 0) {
    renderFavorites([]);
    return;
  }

  const allTeachers = await fetchTeachers();

  const favoriteTeachers = allTeachers.filter(teacher =>
    favoritesIds.includes(teacher.id)
  );

  renderFavorites(favoriteTeachers);
  initTeacherCardActions({
    container: document.querySelector('.favorites-list'),
    getTeachers: () => favoriteTeachers,
  });
}
