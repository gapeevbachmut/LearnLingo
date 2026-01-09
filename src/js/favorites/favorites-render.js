import { createTeacherCard } from '../teachers/teacher-card';

export function renderFavorites(teachers) {
  const list = document.querySelector('.favorites-list');
  if (!list) return;

  if (!teachers.length) {
    list.innerHTML =
      '<p class="no-fav-teachers">No favorites teachers yet <svg width="20" height="20" class="svg-heart-broken"><use href="#icon-heart-broken"></use></svg></p >';
    return;
  }

  list.innerHTML = teachers.map(teacher => createTeacherCard(teacher)).join('');
}
