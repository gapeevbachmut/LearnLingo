// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from '../firebase/firebase';
// import { renderGuestHeader } from './header-guest';
// import { renderAuthHeader } from './header-auth';

// const authList = document.querySelector('.auth-list');

// onAuthStateChanged(auth, user => {
//   if (user) {
//     renderAuthHeader(authList, user);
//     // якщо юзер авторизований - показую логаут та ім'я
//   } else {
//     renderGuestHeader(authList);
//     // якщо гість - показую логін та реєстрацію
//   }
// });
// // слідкує за авторизацією
// // відповідає на зміни - user/!user
// // ??? глобальний стан !!!
