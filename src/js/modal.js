import { bookingFormSubmit } from './booking-form';
import { createMarkupTrialLesson } from './modal-markup-trial-lesson';

const modalRoot = document.querySelector('#modal-root');

function lockBodyScroll() {
  document.body.classList.add('no-scroll');
}

function unlockBodyScroll() {
  document.body.classList.remove('no-scroll');
}

export function modalWindow(teacher) {
  modalRoot.innerHTML = createMarkupTrialLesson(teacher);
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

  bookingFormSubmit(close);
}
