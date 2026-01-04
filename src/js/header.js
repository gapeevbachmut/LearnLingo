import { modalWindow } from './modal';

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
