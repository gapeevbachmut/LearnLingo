import { setTeachers } from '../teachers/teachers-list';

const filterPrice = document.querySelector('.price');

let allTeachers = [];

export function createPriceFilter(teachers) {
  allTeachers = teachers;
  // console.log('allTeachers:', allTeachers);
  const prices = teachers.map(teacher => teacher.price_per_hour);

  const uniquePrices = [...new Set(prices)].sort((a, b) => a - b);
  uniquePrices.forEach(price => {
    const option = document.createElement('option');
    option.value = price;
    option.textContent = `${price} $`;
    filterPrice.append(option);
  });
  filterPrice.value = '';
}

filterPrice.addEventListener('change', event => {
  // console.log('raw value:', event.target.value);
  // console.log('number:', Number(event.target.value));
  const value = event.target.value;
  const selectPrice = Number(value);

  // console.log('selected:', value, selectPrice);

  // const selectPrice = Number(event.target.value);
  // console.log(typeof selectPrice, selectPrice);
  if (!value) {
    setTeachers(allTeachers);
    return;
  }

  const filteredTeachers = allTeachers.filter(
    teacher => teacher.price_per_hour === selectPrice
  );
  // console.log('result:', filteredTeachers.length);

  setTeachers(filteredTeachers);
});
