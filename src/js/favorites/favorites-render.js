import { createTeacherCard } from '../teachers/teacher-card';

export function renderFavorites(teachers) {
  const list = document.querySelector('.favorites-list');
  if (!list) return;

  if (!teachers.length) {
    list.innerHTML =
      '<p>No favorites teachers yet 💔<svg width="20" height="20" class="teacher-avatar-svg"><use href="heart-broken.svg#icon-hover"></use></svg></p >';
    return;
  }

  list.innerHTML = teachers.map(teacher => createTeacherCard(teacher)).join('');
}
