import teachers from '../DB/teachers.json';
import { createTeacherCard, fetchTeachers } from './teacher-card.js';

// console.log(teachers);

teachers.forEach(teacher => {
  // console.log(teacher.name);
});

const teacherList = document.querySelector('.teachers-list');
const perPage = 4;

function renderTeachers(teachersArray) {
  const markup = teachersArray
    .map(teacher => createTeacherCard(teacher))
    .join('');

  teacherList.innerHTML = markup;
}

renderTeachers(teachers);
