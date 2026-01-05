import { modalWindow } from './modal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { logoutUserMarkup } from './auth-logout';

const logIn = document.querySelector('.logIn');
const register = document.querySelector('.register');

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

////////////////////////////////////////////////

onAuthStateChanged(auth, user => {
  if (user) {
    // показати Logout

    logoutUserMarkup();

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
