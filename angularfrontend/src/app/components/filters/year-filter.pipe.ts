import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yearFilter',
})
export class YearFilterPipe implements PipeTransform {
  transform(list: any[], value: string) {
    return value
      ? list.filter((item) =>
          item.transaction_date !== undefined
            ? item.transaction_date.split('-')[0] === value
            : false
        )
      : list;
  }
}
