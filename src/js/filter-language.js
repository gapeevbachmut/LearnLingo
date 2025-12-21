import { setTeachers } from './teachers-list';

const filterLanguage = document.querySelector('.language');

let allTeachers = [];

export function createLanguageFilter(teachers) {
  allTeachers = teachers;

  const languages = teachers.flatMap(teacher => teacher.languages); // збираю всі мови
  const uniqueLanguages = [...new Set(languages)]; // прибираю повтор

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
    teacher.languages.includes(selectLanguage)
  );
  setTeachers(filteredTeachers);
});
