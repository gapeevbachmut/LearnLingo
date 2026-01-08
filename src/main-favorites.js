import { onAuthReady } from './js/auth/auth-state';
import { initFavoritesPage } from './js/favorites/favorites-page';

onAuthReady(user => {
  if (!user) {
    // якщо гість — редірект
    window.location.href = './index.html';
    return;
  }

  initFavoritesPage(user);
});
