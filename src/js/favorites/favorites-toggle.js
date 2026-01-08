import { getCurrentUser } from '../auth/auth-state';
import { modalWindow } from '../modal/modal';
import { toggleFavorites } from './favorites-storage';

export function initFavoriteToggle(container) {
  container.addEventListener('click', event => {
    const likeBtn = event.target.closest('.teacher-like-btn');
    if (!likeBtn) return;

    const card = likeBtn.closest('.teacher-card');
    const teacherId = card.dataset.id;

    const user = getCurrentUser();

    // гість
    if (!user) {
      modalWindow({ type: 'login' });
      return;
    }

    // юзер
    toggleFavorites(user.uid, teacherId);
    likeBtn.classList.toggle('is-favorite');
  });
}

// //  клік по ❤️ та зміна іконки

// // у teacher-card.js є така розмітка для кожного вчителя

// /* <button class="teacher-like-btn" type="button">
//   <svg width="16" height="16" class="svg-heart">
//     <use href="#icon-normal"></use>
//   </svg>
// </button>; */

// //  отримати кнопку - повісити слухач - подія клік -
// // (якщо юзер не авторизований видати повідомлення(......),
// // якщо авторизований - при кліку міняється іконка, та вчитель додається до "обранрго")
// /* <button class="teacher-like-btn" type="button">
//   <svg width="16" height="16" class="svg-heart">
//     <use href="#icon-hover"></use>
//   </svg>
// </button>; */
// // сюди передати вчителя

// export function favoriteToggle() {
//   const likeBtn = document.querySelector('.teacher-like-btn');

//   if (
//     user
//     // як додати сюди юзера?
//   ) {
//     likeBtn.addEventListener('click', console.log('click'));
//     // console.log(likeBtn);
//     // console.log(teacher.name)
//     // console.log(user);
//   }
// }
