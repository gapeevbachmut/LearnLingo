import { createTeacherCard } from '../teachers/teacher-card';

const list = document.querySelector('.favorites-list');

export function renderFavorites(teachers) {
  if (!teachers.length) {
    list.innerHTML = '<p>No favorites yet 💔</p>';
    return;
  }

  list.innerHTML = teachers.map(teacher => createTeacherCard(teacher)).join('');
}
