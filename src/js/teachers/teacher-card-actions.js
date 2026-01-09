// teachers/teacher-card-actions.js
import { modalWindow } from '../modal/modal';
import { initFavoriteToggle } from '../favorites/favorites-toggle';

export function initTeacherCardActions({ container, getTeachers }) {
  if (!container) return;

  initFavoriteToggle(container);

  // ----------------  teacher  extra - додаткова інформація
  container.addEventListener('click', event => {
    handleReadMore(event, container);
    handleTrialLesson(event, getTeachers());
  });
}

// ---------------- обробка - показати більше
function handleReadMore(event, container) {
  //ловиться клік по всьому списку
  const readMoreBtn = event.target.closest('.teacher-read-more');
  // кнопка на картці де був клік
  if (!readMoreBtn) return;
  // якщо не кнопка - нічого не робиться!!!

  const card = readMoreBtn.closest('.teacher-card');
  // картка вчителя де був клік
  const extra = card.querySelector('.teacher-extra');
  // прихований текст
  const trialLessonBtn = card.querySelector('.trial-lesson-btn');
  // BTN - Book trial lesson

  closeOtherCards(container, card); // закриваю інші картки

  // перемикаю поточну картку
  const isHidden = extra.classList.toggle('is-hidden');
  if (isHidden) {
    // закрити
    readMoreBtn.classList.remove('is-hidden');
    trialLessonBtn.classList.add('is-hidden');
  } else {
    //  відкрити
    readMoreBtn.classList.add('is-hidden');
    trialLessonBtn.classList.remove('is-hidden');
  }
}

//------------------обробка кнопки бронювання уроку
function handleTrialLesson(event, teachers) {
  const trialLessonBtn = event.target.closest('.trial-lesson-btn');
  if (!trialLessonBtn) return;

  const card = trialLessonBtn.closest('.teacher-card');
  const teacherId = card.dataset.id;

  const teacher = teachers.find(t => t.id === teacherId);
  if (!teacher) return;

  modalWindow({ type: 'trial', teacher });
}

// ---------------------  закрити інші картки
function closeOtherCards(container, currentCard) {
  container.querySelectorAll('.teacher-card').forEach(card => {
    if (card === currentCard) return;

    card.querySelector('.teacher-extra')?.classList.add('is-hidden');
    card.querySelector('.trial-lesson-btn')?.classList.add('is-hidden');
    card.querySelector('.teacher-read-more')?.classList.remove('is-hidden');
  });
}
