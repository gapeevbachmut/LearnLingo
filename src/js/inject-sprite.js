import spriteUrl from '../img/sprite.svg&raw';

export function injectSvgSprite() {
  const div = document.createElement('div');
  div.style.display = 'none';
  div.innerHTML = spriteUrl;
  document.body.insertBefore(div, document.body.firstChild);
}
