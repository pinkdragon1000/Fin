import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionTypeFilter',
})
export class TransactionTypeFilterPipe implements PipeTransform {
  transform(list: any[], value: string) {
    return !value || value === 'null'
      ? list
      : list.filter((item) => item.transaction_type === value);
  }
}
