import { signOut } from 'firebase/auth';
import { auth } from './firebase';

export async function logoutUser() {
  await signOut(auth);
}

// const logout = document.querySelector('.logout-btn');
// logout.addEventListener('click', async event => {
//   if (event.target.classList.contains('logout-btn')) {
//     await signOut(auth);
//   }
// });

export function logoutUserMarkup(user) {
  const name = user.displayName || user.email;

  return `
    <div>
       <p>Hello, ${name} </p>
  <button type="button" class="logout-btn"> LOG-OUT</button>
    </div>`;
}
