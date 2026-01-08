// auth/auth-state.js
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { renderGuestHeader } from '../header/header-guest';
import { renderAuthHeader } from '../header/header-auth';

let currentUser = null;

export function initAuthState() {
  const authList = document.querySelector('.auth-list');
  if (!authList) return;

  onAuthStateChanged(auth, user => {
    currentUser = user || null;
    if (user) {
      renderAuthHeader(authList, user);
      // якщо юзер авторизований - показую логаут та ім'я
    } else {
      renderGuestHeader(authList);
      // якщо гість - показую логін та реєстрацію
    }
  });
}

export function getCurrentUser() {
  return currentUser;
}

// слідкує за авторизацією
// відповідає на зміни - user/!user
// У КОРИСТУВАЧА Є
// user.uid
// user.email
// user.displayName
