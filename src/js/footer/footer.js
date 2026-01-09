'use strict';

const date = new Date();
// console.log('Date: ', date);
// console.log('Full year: ', date.getFullYear());

// const footerDate = document.querySelector('.footer-date');

const dateYear = document.querySelector('.date-year');
dateYear.textContent = date.getFullYear();
