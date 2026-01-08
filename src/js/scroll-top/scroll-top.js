export function scrollToTop() {
  const scrollTop = document.querySelector('.scroll-top'); // кнопка
  if (!scrollTop) return;

  const toggleVisibility = () => {
    if (window.scrollY > 350) {
      scrollTop.classList.remove('is-hidden'); //  показати кнопку
    } else {
      scrollTop.classList.add('is-hidden'); //  приховати кнопку
    }
  };

  window.addEventListener('scroll', toggleVisibility); //  слухач на вікно при скролі
  toggleVisibility();

  const up = () =>
    //  обробка кліку
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

  scrollTop.addEventListener('click', up);
}
