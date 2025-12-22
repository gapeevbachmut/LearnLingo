import { fetchTeachers } from './js/teachers-api.js';
import { setTeachers } from './js/teachers-list.js';
import { createLanguageFilter } from './js/filter-language.js';
import { createLevelFilter } from './js/filter-level.js';
import { createPriceFilter } from './js/filter-price.js';

export async function init() {
  const teachers = await fetchTeachers();

  setTeachers(teachers);
  createLanguageFilter(teachers);
  createLevelFilter(teachers);
  createPriceFilter(teachers);
  // console.log('teachers from API:', teachers);
}

init();

import { injectSvgSprite } from './js/inject-sprite.js';

injectSvgSprite(); // вставка SVG-спрайта в <body>

import './js/main-content.js';
import './js/filter-language.js';
import './js/teachers-list.js';
import './js/footer.js';
