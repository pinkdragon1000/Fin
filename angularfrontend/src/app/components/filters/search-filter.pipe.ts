import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
  transform(list: any[], value: string): any {
    return list
      ? list.filter(
          (item) => item.account_Description.search(new RegExp(value, 'i')) > -1
        )
      : [];
  }
}
