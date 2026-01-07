import './js/filters/filter-language.js';
import './js/teachers/teachers-list.js';

import { fetchTeachers } from './js/teachers/teachers-api.js';
import { setTeachers } from './js/teachers/teachers-list.js';
import { createLanguageFilter } from './js/filters/filter-language.js';
import { createLevelFilter } from './js/filters/filter-level.js';
import { createPriceFilter } from './js/filters/filter-price.js';

export async function initTeachers() {
  const teachers = await fetchTeachers();

  setTeachers(teachers);
  createLanguageFilter(teachers);
  createLevelFilter(teachers);
  createPriceFilter(teachers);
  // console.log('teachers from API:', teachers);
}

initTeachers();
