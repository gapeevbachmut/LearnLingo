import { createTeacherCard } from './teacher-card.js';
import { fetchTeachers } from './teachers-api.js';
import { init } from '../main.js';

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
  const btn = event.target.closest('.teacher-read-more');
  if (!btn) return; // якщо не кнопка - нічого не робиться!!!

  const card = btn.closest('.teacher-card');
  // картка вчителя
  const extraBlock = card.querySelector('.teacher-extra');

  const openedBlocks = teacherList.querySelectorAll(
    // закриваю інші вікна
    '.teacher-extra:not(.is-hidden)'
  );

  openedBlocks.forEach(block => {
    if (block !== extraBlock) {
      block.classList.add('is-hidden');
      block
        .closest('.teacher-card')
        .querySelector('.teacher-read-more').textContent = 'Read more';
    }
  });

  //  перемикаю
  const isHidden = extraBlock.classList.toggle('is-hidden');

  btn.textContent = isHidden ? 'Read more' : 'Read less';
});
