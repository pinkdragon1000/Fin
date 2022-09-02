import { formatDate } from '@angular/common';

export function dateFormatter(date: Date) {
  return formatDate(date, 'MM-dd-YYYY', 'en-US');
}
