import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monthFilter',
})
export class MonthFilterPipe implements PipeTransform {
  transform(list: any[], value: string) {
    return value
      ? list.filter((item) =>
          item.transaction_date !== undefined
            ? item.transaction_date.split('-')[1] === value
            : false
        )
      : list;
  }
}
