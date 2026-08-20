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

export const yearData = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  const yearData: (string | null)[] = [null];
  let year = startYear || 1980;
  while (year <= currentYear) {
    yearData.push(year.toString());
    year += 1;
  }
  return yearData;
};
