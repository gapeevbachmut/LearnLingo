import { setTeachers } from './teachers-list';

const filterLevel = document.querySelector('.level');

let allTeachers = [];

export function createLevelFilter(teachers) {
  allTeachers = teachers;
  const levels = teachers.flatMap(teacher => teacher.levels);
  const uniqueLevels = [...new Set(levels)];

  uniqueLevels.forEach(lev => {
    const option = document.createElement('option');
    option.value = lev;
    option.textContent = lev;
    filterLevel.append(option);
  });
  filterLevel.value = '';
}

filterLevel.addEventListener('change', event => {
  const selectLevel = event.target.value;

  if (!selectLevel) {
    setTeachers(allTeachers);
    return;
  }

  const filteredTeachers = allTeachers.filter(teacher =>
    teacher.levels.includes(selectLevel)
  );
  setTeachers(filteredTeachers);
});
