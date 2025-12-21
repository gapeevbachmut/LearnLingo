import './js/main-content.js';
import './js/filter-language.js';
import './js/teachers-list.js';
import './js/footer.js';

import { fetchTeachers } from './js/teachers-api.js';
import { setTeachers } from './js/teachers-list.js';
import { createLanguageFilter } from './js/filter-language.js';

export async function init() {
  const teachers = await fetchTeachers();

  setTeachers(teachers);
  createLanguageFilter(teachers);
}

init();
