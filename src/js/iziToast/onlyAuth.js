import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function onlyAuthMessage() {
  iziToast.show({
    title: 'Hello!',
    message: 'This feature is available only to authorized users!',

    zindex: 9999,
    position: 'topCenter',
    backgroundColor: '#f4c550',
    progressBarColor: 'rgb(0, 255, 184)',
    pauseOnHover: true,
  });
}
