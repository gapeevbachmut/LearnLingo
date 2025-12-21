import { createTeacherCard } from './teacher-card.js';
import { fetchTeachers } from './teachers-api.js';

const teacherList = document.querySelector('.teachers-list'); // ul
//  це - ul - сюди вставляється  - li (createTeacherCard)

const loadMoreBtn = document.querySelector('.load-more-btn'); //кнопка

// пагінація клієнтська!!!!!!!!!!!
const perPage = 4;
let currentPage = 1;
let allTeachers = [];

async function init() {
  //отримую всіх викладачів
  allTeachers = await fetchTeachers();
  renderTeachers();
}

function renderTeachers() {
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

init();
