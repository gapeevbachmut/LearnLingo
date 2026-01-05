import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export async function logoutUser() {
  await signOut(auth);
}

export function logoutUserMarkup() {
  return `
    <div>
  <button type="button" class="logout"> LOG-OUT</button>
    </div>`;
}
