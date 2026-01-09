import { logoutUser, logoutUserMarkup } from '../auth/auth-logout';

export function renderAuthHeader(container, user) {
  container.innerHTML = `
    <div><a href="./favorites.html">Favorites</a></div>
${logoutUserMarkup(user)}

  `;
  // container.innerHTML = logoutUserMarkup(user);

  container.addEventListener('click', async event => {
    if (event.target.classList.contains('logout')) {
      await logoutUser();
    }
  });
}
