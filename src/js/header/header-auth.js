import { logoutUser, logoutUserMarkup } from '../auth/auth-logout';

export function renderAuthHeader(authList, user, container) {
  container.innerHTML = `
    <li><a href="./favorites.html">❤️ Favorites</a></li>
    <li>
      <button class="logout-btn">Log out</button>
    </li>
    <li class="user-name">Hello, ${user.displayName || user.email}</li>
  `;
  authList.innerHTML = logoutUserMarkup(user);

  authList.addEventListener('click', async event => {
    if (event.target.classList.contains('logout')) {
      await logoutUser();
    }
  });
}
