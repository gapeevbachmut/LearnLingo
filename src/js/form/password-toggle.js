export function initPasswordToggle() {
  document.addEventListener('click', event => {
    const toggleBtn = event.target.closest('.password-toggle');
    if (!toggleBtn) return;

    const box = toggleBtn.closest('.password-box');
    if (!box) return;

    const input = box.querySelector('input');
    const useEl = toggleBtn.querySelector('use');

    if (!input || !useEl) return;

    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';

    useEl.setAttribute('href', isHidden ? '#icon-eye' : '#icon-eye-off');
    toggleBtn.setAttribute(
      'aria-label',
      isHidden ? 'Hide password' : 'Show password'
    );
  });
}
