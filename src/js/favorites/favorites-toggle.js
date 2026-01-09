import { getCurrentUser } from '../auth/auth-state';
import { onlyAuthMessage } from '../iziToast/onlyAuth';
import { modalWindow } from '../modal/modal';
import {
  // getFavorites,
  isFavorites,
  toggleFavorites,
} from './favorites-storage';

export function initFavoriteToggle(container) {
  container.addEventListener('click', event => {
    const likeBtn = event.target.closest('.teacher-like-btn');
    if (!likeBtn) return;

    const card = likeBtn.closest('.teacher-card');
    const teacherId = card.dataset.id;
    const user = getCurrentUser();

    // console.log('CLICK teacherId:', teacherId);
    // console.log('Current favorites:', getFavorites(user?.uid));

    // гість
    if (!user) {
      // тут вивести повідомлення
      // alert('This feature is available only to authorized users!');
      onlyAuthMessage();
      modalWindow({ type: 'login' });
      return;
    }

    // юзер є
    // оновлюю дані у сховищі
    toggleFavorites(user.uid, teacherId);
    // <use> всередині  кнопки
    const useElement = likeBtn.querySelector('use');

    // чи є зараз цей вчитель у фаворитах
    const isNowFavorite = isFavorites(user.uid, teacherId);

    //  href залежно від результату
    if (isNowFavorite) {
      useElement.setAttribute('href', '#icon-hover');
    } else {
      useElement.setAttribute('href', '#icon-normal');
    }
  });
}
