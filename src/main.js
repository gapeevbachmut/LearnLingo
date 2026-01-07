import './js/header/header.js';
import './js/footer/footer.js';

import { injectSvgSprite } from './js/svg-icons/inject-sprite.js';
import { initPasswordToggle } from './js/form/password-toggle.js';
import { initAuthState } from './js/auth/auth-state';

initAuthState(); // глобальний стан user/!user

injectSvgSprite(); // вставка SVG-спрайта в <body>

initPasswordToggle(); // для поля пароля - око
