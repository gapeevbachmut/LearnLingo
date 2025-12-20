import { createTeacherCard } from './teacher-card.js';
import { fetchTeachers } from './teachers-api.js';

const teacherList = document.querySelector('.teachers-list');
const perPage = 4;

async function renderTeachers() {
  const teachers = await fetchTeachers();

  const markup = teachers
    .slice(0, perPage)
    .map(teacher => createTeacherCard(teacher))
    .join('');

  teacherList.innerHTML = markup;
}

renderTeachers();
