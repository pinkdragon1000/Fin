import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'transactionGroupFilter' })
export class TransactionGroupFilterPipe implements PipeTransform {
  transform(list: any[], value: string): any {
    return list
      ? list.filter(
          (item) => item.transaction_group.search(new RegExp(value, 'i')) > -1
        )
      : [];
  }
}
