import spriteUrl from '../img/sprite.svg?raw';

export function injectSvgSprite() {
  const svg = document.createElement('svg');
  svg.style.display = 'none';
  svg.innerHTML = spriteUrl;
  document.body.prepend(svg);
}
