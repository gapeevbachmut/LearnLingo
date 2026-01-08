import { initFavoriteToggle } from '../favorites/favorites-toggle';
import { modalWindow } from '../modal/modal';
import { createTeacherCard } from './teacher-card';

//  це - ul - сюди вставляється  - li (createTeacherCard)
const teacherList = document.querySelector('.teachers-list'); // ul
const loadMoreBtn = document.querySelector('.load-more-btn'); //кнопка - load-more

const perPage = 4;
let currentPage = 1;
let allTeachers = []; //копія БД

// -------------   запит на вчителів
export function setTeachers(teachers) {
  allTeachers = teachers; //teachers приходить з main.js
  currentPage = 1;
  renderTeachers(); // тут або у auth-state.js
}

// ------------   рендер розмітки

export function renderTeachers() {
  const end = currentPage * perPage;
  const teachersForRender = allTeachers.slice(0, end);
  const markup = teachersForRender
    .map(teacher => createTeacherCard(teacher))
    .join('');

  teacherList.innerHTML = markup; //  малюю розмітку
  // -------------------  ховаю/показую кнопку
  if (teachersForRender.length >= allTeachers.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

initFavoriteToggle(teacherList);

// -----------------  пагінація
loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  renderTeachers();
});

// ----------------  teacher  extra - додаткова інформація

teacherList.addEventListener('click', event => {
  handleReadMore(event);
  handleTrialLesson(event);
});

// ---------------- обробка - показати більше

function handleReadMore(event) {
  //ловиться клік по всьому списку
  const readMoreBtn = event.target.closest('.teacher-read-more'); // кнопка на картці де був клік
  if (!readMoreBtn) return; // якщо не кнопка - нічого не робиться!!!

  const card = readMoreBtn.closest('.teacher-card'); // картка вчителя де був клік
  const extraBlock = card.querySelector('.teacher-extra'); // прихований текст
  const trialLessonBtn = card.querySelector('.trial-lesson-btn'); // BTN - Book trial lesson

  closeOtherCards(card); // закриваю інші картки

  // перемикаю поточну картку
  const isHidden = extraBlock.classList.toggle('is-hidden');

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

function handleTrialLesson(event) {
  const trialLessonBtn = event.target.closest('.trial-lesson-btn');
  if (!trialLessonBtn) return;

  const card = trialLessonBtn.closest('.teacher-card');
  const teacherId = card.dataset.id;

  const teacher = allTeachers.find(t => t.id === teacherId);
  if (!teacher) return;

  modalWindow({ type: 'trial', teacher });
}

// ---------------------  закрити інші картки
function closeOtherCards(currentCard) {
  teacherList.querySelectorAll('.teacher-card').forEach(card => {
    if (card === currentCard) return;

    card.querySelector('.teacher-extra')?.classList.add('is-hidden');
    card.querySelector('.trial-lesson-btn')?.classList.add('is-hidden');
    card.querySelector('.teacher-read-more')?.classList.remove('is-hidden');
  });
}
