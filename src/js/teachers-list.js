import { modalWindow } from './modal.js';
import { createTeacherCard } from './teacher-card.js';

// import { fetchTeachers } from './teachers-api.js';
// import { init } from '../main.js';

//  це - ul - сюди вставляється  - li (createTeacherCard)
const teacherList = document.querySelector('.teachers-list'); // ul
const loadMoreBtn = document.querySelector('.load-more-btn'); //кнопка - load-more

const perPage = 4;
let currentPage = 1;
let allTeachers = []; //копія БД

export function setTeachers(teachers) {
  allTeachers = teachers; //teachers приходить з main.js
  currentPage = 1;
  renderTeachers();
}

export function renderTeachers() {
  const end = currentPage * perPage;

  const teachersForRender = allTeachers.slice(0, end);

  const markup = teachersForRender
    .map(teacher => createTeacherCard(teacher))
    .join('');

  teacherList.innerHTML = markup;

  // ховаю кнопку
  if (teachersForRender.length >= allTeachers.length) {
    loadMoreBtn.style.display = 'none';
  }
}

loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  renderTeachers();
});

// ---------------------------------  teacher  extra

teacherList.addEventListener('click', event => {
  //ловиться клік по всьому списку
  const readMoreBtn = event.target.closest('.teacher-read-more'); // кнопка на картці де був клік
  if (!readMoreBtn) return; // якщо не кнопка - нічого не робиться!!!

  const card = readMoreBtn.closest('.teacher-card'); // картка вчителя де був клік
  const extraBlock = card.querySelector('.teacher-extra'); // прихований текст
  const trialLessonBtn = card.querySelector('.trial-lesson-btn'); // BTN - Book trial lesson

  // закриваю інші картки
  teacherList.querySelectorAll('.teacher-card').forEach(otherCard => {
    if (otherCard !== card) {
      otherCard.querySelector('.teacher-extra')?.classList.add('is-hidden');
      otherCard.querySelector('.trial-lesson-btn')?.classList.add('is-hidden');
      otherCard
        .querySelector('.teacher-read-more')
        ?.classList.remove('is-hidden');
    }
  });

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

  const openModal = () => {
    console.log('modal open');
    modalWindow();
  };
  trialLessonBtn.addEventListener('click', openModal);
});

// -------------  scroll  top

const scrollTop = document.querySelector('.scroll-top'); // кнопка
const toggleVisibility = () => {
  if (window.scrollY > 350) {
    scrollTop.classList.remove('is-hidden'); //  показати кнопку
  } else {
    scrollTop.classList.add('is-hidden'); //  приховати кнопку
  }
};

window.addEventListener('scroll', toggleVisibility); //  слухач на вікно при скролі
toggleVisibility();

const up = () =>
  //  обробка кліку
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

scrollTop.addEventListener('click', up);
