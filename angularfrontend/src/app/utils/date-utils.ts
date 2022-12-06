import { formatDate } from '@angular/common';

export const dateFormatter = (date: Date) =>
  formatDate(date, 'YYYY-MM-dd', 'en-US', '+0');

export const monthData = [
  null,
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

export const yearData = (startYear) => {
  var currentYear = new Date().getFullYear(),
    yearData = [null];
  startYear = startYear || 1980;
  while (startYear <= currentYear) {
    yearData.push((startYear++).toString());
  }
  return yearData;
};
