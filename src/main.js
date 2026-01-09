import './js/footer/footer.js';

import { injectSvgSprite } from './js/svg-icons/inject-sprite.js';
import { initPasswordToggle } from './js/form/password-toggle.js';
import { initAuthState } from './js/auth/auth-state';
import { scrollToTop } from './js/scroll-top/scroll-top.js';

initAuthState(); // глобальний стан user/!user

injectSvgSprite(); // вставка SVG-спрайта в <body>

initPasswordToggle(); // для поля пароля - око

scrollToTop(); // підняття до гори
