import { modalWindow } from './modal';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import { logoutUserMarkup } from './auth-logout';

const logIn = document.querySelector('.logIn');
const register = document.querySelector('.register');

// ul in header
const authList = document.querySelector('.auth-list');

// if (logIn) {
//   logIn.addEventListener('click', event => {
//     event.preventDefault();
//     modalWindow({ type: 'login' });
//   });
// }

// if (register) {
//   register.addEventListener('click', event => {
//     event.preventDefault();
//     modalWindow({ type: 'register' });
//   });
// }

////////////////////////////////////////////////

onAuthStateChanged(auth, user => {
  if (user) {
    //якщо користувач авторизований
    authList.innerHTML = logoutUserMarkup(user); //змінити розмітку показати Logout

    authList.addEventListener('click', async event => {
      if (event.target.classList.contains('logout-btn')) {
        await signOut(auth);
      }
    });

    console.log('name', user.displayName);
    console.log('Logged in:', user.email);
  } else {
    // показати Login / Register
    if (logIn) {
      logIn.addEventListener('click', event => {
        event.preventDefault();
        modalWindow({ type: 'login' });
      });
    }
    if (register) {
      register.addEventListener('click', event => {
        event.preventDefault();
        modalWindow({ type: 'register' });
      });
    }
    console.log('Not logged in');
  }
});

// Це виконується:
// при завантаженні сторінки
// після логіну
// після logout
