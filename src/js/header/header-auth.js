import { logoutUser, logoutUserMarkup } from '../auth/auth-logout';

export function renderAuthHeader(authList, user) {
  authList.innerHTML = logoutUserMarkup(user);

  authList.addEventListener('click', async event => {
    if (event.target.classList.contains('logout')) {
      await logoutUser();
    }
  });
}
