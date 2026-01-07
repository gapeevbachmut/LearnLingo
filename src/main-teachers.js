import { injectSvgSprite } from './js/svg-icons/inject-sprite.js';
import { initPasswordToggle } from './js/form/password-toggle.js';

import './js/header/header.js';
import './js/footer/footer.js';

import './js/filters/filter-language.js';
import './js/teachers/teachers-list.js';

import { fetchTeachers } from './js/teachers/teachers-api.js';
import { setTeachers } from './js/teachers/teachers-list.js';
import { createLanguageFilter } from './js/filters/filter-language.js';
import { createLevelFilter } from './js/filters/filter-level.js';
import { createPriceFilter } from './js/filters/filter-price.js';

injectSvgSprite(); // вставка SVG-спрайта в <body>

export async function initTeachers() {
  const teachers = await fetchTeachers();

  setTeachers(teachers);
  createLanguageFilter(teachers);
  createLevelFilter(teachers);
  createPriceFilter(teachers);
  // console.log('teachers from API:', teachers);
}

initTeachers();

initPasswordToggle(); // для поля пароля - око
