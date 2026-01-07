import { setTeachers } from '../teachers/teachers-list';

const filterLanguage = document.querySelector('.language');
// тег select

let allTeachers = []; //  копія БД

export function createLanguageFilter(teachers) {
  allTeachers = teachers; //  teachers приходить з main.js

  const languages = teachers.flatMap(teacher => teacher.languages);
  // збираю всі мови в один масив
  const uniqueLanguages = [...new Set(languages)];
  // прибираю повтор

  uniqueLanguages.forEach(lang => {
    // для кожної мови - ячейка
    const option = document.createElement('option');
    option.value = lang; // атрибут value = мова
    option.textContent = lang; // текст всередині тега
    filterLanguage.append(option); //вставляю у тег select, тегі option
  });
  filterLanguage.value = ''; //дефолт - All languages
}

filterLanguage.addEventListener('change', event => {
  const selectLanguage = event.target.value;
  // обираю мову
  if (!selectLanguage) {
    //якщо мова не обрана - (All languages) - показую усіх вчителів
    setTeachers(allTeachers);
    return;
  }

  const filteredTeachers = allTeachers.filter(teacher =>
    //коли мова обрана-перевіряю властивість lang[] у кожного вчителя
    //на наявність обраної мови
    teacher.languages.includes(selectLanguage)
  );
  //у функцію відмальовки списку (з teachers-list.js )- передаємо вчителів з наявною мовою
  setTeachers(filteredTeachers);
});
