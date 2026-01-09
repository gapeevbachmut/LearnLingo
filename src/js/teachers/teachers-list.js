import { createTeacherCard } from './teacher-card';
import { initTeacherCardActions } from './teacher-card-actions';

//  це - ul - сюди вставляється  - li (createTeacherCard)
const teacherList = document.querySelector('.teachers-list');
const loadMoreBtn = document.querySelector('.load-more-btn');

const perPage = 4;
let currentPage = 1;
let allTeachers = []; //копія БД

// події/обробка викликати ОДИН раз, одразу після отримання teacherList
initTeacherCardActions({
  container: teacherList,
  getTeachers: () => allTeachers,
});

// -------------   запит на вчителів
export function setTeachers(teachers) {
  allTeachers = teachers; //teachers приходить з teachers-page.js
  currentPage = 1;
  renderTeachers();
}

// ------------   рендер розмітки
export function renderTeachers() {
  const end = currentPage * perPage;
  const teachersForRender = allTeachers.slice(0, end);

  const markup = teachersForRender
    .map(teacher => createTeacherCard(teacher))
    .join('');

  teacherList.innerHTML = markup; //  малюю розмітку

  // -------------------  ховаю/показую кнопку - load More
  if (teachersForRender.length >= allTeachers.length) {
    loadMoreBtn.style.display = 'none';
  } else {
    loadMoreBtn.style.display = 'block';
  }
}

// -----------------  пагінація
loadMoreBtn.addEventListener('click', () => {
  currentPage += 1;
  renderTeachers();
});
