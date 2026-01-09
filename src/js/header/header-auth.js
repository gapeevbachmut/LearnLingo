import { logoutUser, logoutUserMarkup } from '../auth/auth-logout';

export function renderAuthHeader(container, user) {
  container.innerHTML = `
    <li class="on-favorites"><a href="./favorites.html">Favorites</a></li>
${logoutUserMarkup(user)}

  `;
  // container.innerHTML = logoutUserMarkup(user);

  container.addEventListener('click', async event => {
    if (event.target.classList.contains('logout')) {
      await logoutUser();
    }
  });
}
