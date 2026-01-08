//  клік по ❤️ та зміна іконки
// у teacher-card.js є така розмітка для кожного вчителя
{
  /* <button class="teacher-like-btn" type="button">
  <svg width="16" height="16" class="svg-heart">
    <use href="#icon-normal"></use>
  </svg>
</button>; */
}

//  отримати кнопку - повісити слухач - подія клік -
// (якщо юзер не авторизований видати повідомлення(......),
// якщо авторизований - при кліку міняється іконка, та вчитель додається до "обранрго")
// сюди передати вчителя

export function favoriteToggle() {
  const likeBtn = document.querySelector('.teacher-like-btn');
  likeBtn.addEventListener('click', console.log(teacher.name));
  // console.log(likeBtn);
}
