import { formatDate } from '@angular/common';

export const dateFormatter = (date: Date) => formatDate(date, 'MM-dd-YYYY', 'en-US');
