import { setTeachers } from './teachers-list';

const filterLanguage = document.querySelector('.language');

let allTeachers = [];

export function createLanguageFilter(teachers) {
  allTeachers = teachers;

  const langusges = teachers.flatMap(teacher => teacher.languages); // збираю всі мови
  const uniqueLanguages = [...new Set(langusges)]; // прибираю повтор

  uniqueLanguages.forEach(lang => {
    // для кожної мови ячейка
    const option = document.createElement('option');
    option.value = lang;
    option.textContent = lang;
    filterLanguage.append(option);
  });
  filterLanguage.value = ''; //????
}

filterLanguage.addEventListener('change', event => {
  const selectLanguage = event.target.value;

  if (!selectLanguage) {
    setTeachers(allTeachers);
    return;
  }

  const filteredTeachers = allTeachers.filter(teacher =>
    teacher.langusges.includes(selectLanguage)
  );
  setTeachers(filteredTeachers);
});
