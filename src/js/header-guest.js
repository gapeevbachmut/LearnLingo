import { modalWindow } from './modal';

export function renderGuestHeader(authList) {
  authList.innerHTML = `
    <li>
      <button type="button" class="logIn">
        <svg width="20" height="20">
          <use href="#icon-log-in"></use>
        </svg>
        Log in
      </button>
    </li>
    <li>
      <button type="button" class="register">Registration</button>
    </li>
  `;

  authList
    .querySelector('.logIn')
    .addEventListener('click', () => modalWindow({ type: 'login' }));

  authList
    .querySelector('.register')
    .addEventListener('click', () => modalWindow({ type: 'register' }));
}
