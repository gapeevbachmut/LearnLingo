import { createTeacherCard } from '../teachers/teacher-card';

export function renderFavorites(teachers) {
  const list = document.querySelector('.favorites-list');
  if (!list) return;

  if (!teachers.length) {
    list.innerHTML = '<p>No favorites yet 💔</p>';
    return;
  }

  list.innerHTML = teachers.map(teacher => createTeacherCard(teacher)).join('');
}
