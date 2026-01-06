import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export async function logoutUser() {
  await signOut(auth);
}

export function logoutUserMarkup(user) {
  const name = user.displayName || user.email;

  return `
    <div class="out-box">

  <button type="button" class="logout">
    <svg width="20" height="20">
      <use href="#icon-log-out"></use>
    </svg>Log out  </button>

  <p class="out-text">Hello, ${name} </p>
    </div>`;
}
