import { createMarkupTrialLesson } from './modal-markup-trial-lesson';

const modalRoot = document.querySelector('#modal-root');

export function modalWindow() {
  const backdrop = document.querySelector('.backdrop');

  // backdrop.addEventListener('click', event => {
  //   if (event.target === backdrop) {
  //     modalRoot.innerHTML = '';
  //   }
  // });

  const closeModal = document.querySelector('.closeButton');
  // closeModal.addEventListener('click', event => {
  //   if (event.target === closeModal) {
  //     modalRoot.innerHTML = '';
  //   }
  // });

  modalRoot.innerHTML = createMarkupTrialLesson();
}
