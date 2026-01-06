import { bookingFormSubmit } from './booking-form';
import { loginFormSubmit } from './login-form';

import { createMarkupLogin } from './modal-markup-login';
import { createMarkupRegister } from './modal-markup-register';
import { createMarkupTrialLesson } from './modal-markup-trial-lesson';
// import { initPasswordToggle } from './password-toggle';
import { registerFormSubmit } from './register-form';

const modalRoot = document.querySelector('#modal-root');

function lockBodyScroll() {
  document.body.classList.add('no-scroll');
}

function unlockBodyScroll() {
  document.body.classList.remove('no-scroll');
}

export function modalWindow(config) {
  const { type, teacher } = config;

  let marcup = '';

  switch (type) {
    case 'trial':
      marcup = createMarkupTrialLesson(teacher);
      break;

    case 'login':
      marcup = createMarkupLogin();
      break;

    case 'register':
      marcup = createMarkupRegister();
      break;

    default:
      return;
  }

  modalRoot.innerHTML = marcup;

  // initPasswordToggle(); // для поля пароля - око

  lockBodyScroll();

  const backdrop = modalRoot.querySelector('.backdrop');
  const closeButton = modalRoot.querySelector('.closeButton');

  const close = () => {
    modalRoot.innerHTML = '';
    unlockBodyScroll();
    document.removeEventListener('keydown', onEsc);
  };

  const onEsc = event => {
    if (event.key === 'Escape') {
      close();
    }
  };
  backdrop.addEventListener('click', event => {
    if (event.target === backdrop) {
      close();
    }
  });
  closeButton.addEventListener('click', close);
  document.addEventListener('keydown', onEsc);

  if (type === 'trial') bookingFormSubmit(close);
  if (type === 'login') loginFormSubmit(close);
  if (type === 'register') registerFormSubmit(close);
}
