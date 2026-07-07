import { Transaction } from './../../models/transaction.models';
import { Component, OnInit } from '@angular/core';
import { TransactionAPIService } from '../../service/transaction-api.service';
import { AccountAPIService } from '../../service/account-api.service';
import { ToastService } from '../../service/toast.service';
import * as accountUtils from './../../utils/account-utils';
import * as dateUtils from './../../utils/date-utils';

@Component({
  selector: 'app-account-component',
  template: `
    <app-page-template
      [pagedirections]="'Click on the Add Transaction button to add a deposit/withdraw'"
      [pagetitle]="this.overallAccountData[0]"
      [buttonlabel]="'Add Transaction'"
    >
      <ng-container form>
        <app-form-component
          [inputData]="accountUtils.inputData"
          [selectLabelData]="accountUtils.selectLabelData"
          [selectData]="accountUtils.selectData"
          [error]="this.error"
          [label]="'Submit'"
          (formSubmit)="postTransactionData()"
        ></app-form-component>
      </ng-container>

      <ng-container content>
        <div *ngIf="transactionData?.length === 0">
          <app-emptycontent-component
            emptyHeader="No Transactions Yet"
            emptyPar="Click the 'Add Transaction' button to add a transaction."
          ></app-emptycontent-component>
        </div>

        <div *ngIf="transactionData?.length !== 0" class="dashboard">

          <!-- Summary cards -->
          <div class="summary-cards">
            <div class="stat-card stat-card--green">
              <span class="stat-label">Deposits</span>
              <span class="stat-value stat-value--green">\${{ overallAccountData[2] }}</span>
            </div>
            <div class="stat-card stat-card--red">
              <span class="stat-label">Withdrawals</span>
              <span class="stat-value stat-value--red">\${{ overallAccountData[3] }}</span>
            </div>
            <div class="stat-card" [ngClass]="overallAccountData[5] >= 0 ? 'stat-card--green' : 'stat-card--red'">
              <span class="stat-label">Difference</span>
              <span class="stat-value" [ngClass]="overallAccountData[5] >= 0 ? 'stat-value--green' : 'stat-value--red'">\${{ overallAccountData[5] }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">Starting Balance</span>
              <span class="stat-value">\${{ overallAccountData[1] }}</span>
            </div>
            <div class="stat-card">
              <span class="stat-label">Current Balance</span>
              <span class="stat-value">\${{ overallAccountData[4] }}</span>
            </div>
          </div>

          <!-- Filters -->
          <div class="filterBox">
            <app-filter-component
              [label]="'Month'"
              [data]="dateUtils.monthData"
              [(model)]="month"
              (searchChange)="monthHandler($event)"
            ></app-filter-component>
            <app-filter-component
              [label]="'Year'"
              [data]="yearData"
              [(model)]="year"
              (searchChange)="yearHandler($event)"
            ></app-filter-component>
            <app-filter-component
              label="Transaction Group"
              [(model)]="transactionGroup"
              (searchChange)="transactionGroupSearchHandler($event)"
            ></app-filter-component>
            <app-filter-component
              label="Type"
              [data]="transactionTypeData"
              [(model)]="transactionType"
              (searchChange)="transactionTypeHandler($event)"
            ></app-filter-component>
            <div class="column" style="justify-content: flex-end;">
              <button *ngIf="hasActiveFilters" class="clear-btn" (click)="clearFilters()">Clear</button>
            </div>
          </div>

          <!-- No filter results -->
          <div *ngIf="filteredData.length === 0">
            <app-emptycontent-component
              emptyHeader="No Results"
              emptyPar="No transactions match the current filters."
            ></app-emptycontent-component>
          </div>

          <!-- Transaction table -->
          <div *ngIf="filteredData.length > 0">
            <app-table-component
              [tableLabel]="'Transactions'"
              [headerData]="accountUtils.transactionHeaders"
              [sortableColumns]="['Date', 'Group']"
              [sortColumn]="sortColumn"
              [sortDirection]="sortDirection"
              (sortChange)="onSortChange($event)"
            >
              <button tableAction class="export-btn" (click)="exportTransactionsCsv()">
                <svg class="export-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 4v11"></path>
                  <path d="M7 10l5 5 5-5"></path>
                  <path d="M5 20h14"></path>
                </svg>
                Export CSV
              </button>
              <tr
                *ngFor="let transaction of pagedData"
                [ngClass]="{
                  'text-deposit': transaction.transaction_type === 'Deposit',
                  'text-withdraw': transaction.transaction_type === 'Withdraw'
                }"
              >
                <td *ngFor="let data of getTransactionTableData(transaction)">
                  {{ data }}
                </td>
                <td class="edit-cell">
                  <app-modal-button-component
                    [type]="'transaction-' + transaction.transaction_id"
                    [class]="'edit'"
                    [pagetitle]="'Edit Transaction'"
                    [title]="'Edit Transaction'"
                  >
                    <app-form-component
                      [inputData]="editDataMap[transaction.transaction_id]?.inputData"
                      [selectLabelData]="accountUtils.selectLabelData"
                      [selectData]="editDataMap[transaction.transaction_id]?.selectData"
                      [error]="this.error"
                      [label]="'Update'"
                      [containsDelete]="true"
                      (formSubmit)="updateTransaction(transaction)"
                      (deletionClick)="deleteTransaction(transaction)"
                    ></app-form-component>
                  </app-modal-button-component>
                </td>
              </tr>
            </app-table-component>

            <!-- Pagination -->
            <div class="pagination" *ngIf="totalPages > 1">
              <button class="page-btn" (click)="prevPage()" [disabled]="currentPage === 0" title="Previous page">
                <svg class="page-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 12H7"></path>
                  <path d="M12 7l-5 5 5 5"></path>
                </svg>
              </button>
              <span class="page-info">{{ currentPage + 1 }} / {{ totalPages }}</span>
              <button class="page-btn" (click)="nextPage()" [disabled]="currentPage >= totalPages - 1" title="Next page">
                <svg class="page-icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h12"></path>
                  <path d="M12 7l5 5-5 5"></path>
                </svg>
              </button>
              <span class="page-count">{{ filteredData.length }} transactions</span>
            </div>
          </div>

          <!-- Charts row -->
          <div *ngIf="filteredData.length > 0" class="charts-row">
            <div *ngIf="depositsByGroup.length > 0" class="chart-block">
              <p class="chart-label">Deposits by Group</p>
              <app-bar-chart-component [plot]="depositsByGroup" [xAxisLabel]="'Deposited ($)'" [colorScheme]="'green'"></app-bar-chart-component>
            </div>
            <div *ngIf="spendingByGroup.length > 0" class="chart-block">
              <p class="chart-label">Spending by Group</p>
              <app-bar-chart-component [plot]="spendingByGroup" [xAxisLabel]="'Spent ($)'" [colorScheme]="'red'"></app-bar-chart-component>
            </div>
            <div *ngIf="balanceSeries[0].series.length > 1 && isAll(transactionType)" class="chart-block chart-block--wide">
              <p class="chart-label">Running Balance</p>
              <app-line-chart-component
                [colorScheme]="'orangePinkScheme'"
                [plot]="balanceSeries"
                [xLabel]="'Date'"
                [yLabel]="'Balance ($)'"
              ></app-line-chart-component>
            </div>
          </div>

        </div>
      </ng-container>
    </app-page-template>
  `,
  styles: [
    `
      .dashboard {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .charts-row {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1.25rem;
        align-items: start;
      }

      .chart-block {
        min-width: 0;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        border: 1px solid var(--fin-neutral-6);
        border-radius: var(--fin-radius);
        padding: 1rem;
        box-shadow: var(--fin-shadow-xs);
      }

      .chart-block--wide {
        grid-column: span 1;
      }

      .chart-label {
        font-size: 0.8125rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fin-neutral-2);
        margin-bottom: 0.5rem;
        text-align: center;
      }

      @media (max-width: 900px) {
        .charts-row {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .chart-block--wide {
          grid-column: 1 / -1;
        }
      }

      .export-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        height: 2.25rem;
        padding: 0 1rem;
        border: 1px solid var(--fin-neutral-5);
        border-radius: var(--fin-radius-sm);
        background: var(--fin-white);
        color: var(--fin-neutral-1);
        font-size: 0.875rem;
        font-family: Inter, sans-serif;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s, box-shadow 0.15s;
      }

      .export-btn:hover {
        border-color: var(--fin-pink);
        color: var(--fin-pink);
        box-shadow: var(--fin-shadow-xs);
      }

      .export-icon {
        width: 1.0625rem;
        height: 1.0625rem;
        flex: 0 0 1rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }

      .pagination {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.75rem 0.5rem 0;
      }

      .page-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2.5rem;
        height: 2rem;
        background: var(--fin-white);
        border: 1px solid var(--fin-neutral-5);
        border-radius: var(--fin-radius-sm);
        padding: 0;
        font-size: 0.875rem;
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
        font-family: Inter, sans-serif;
      }

      .page-btn:hover:not([disabled]) {
        border-color: var(--fin-pink);
        color: var(--fin-pink);
      }

      .page-btn[disabled] {
        opacity: 0.35;
        cursor: default;
      }

      .page-icon {
        width: 1.0625rem;
        height: 1.0625rem;
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 2;
      }

      .page-info {
        font-size: 0.875rem;
        font-weight: 600;
        color: var(--fin-black);
      }

      .page-count {
        font-size: 0.8125rem;
        color: var(--fin-neutral-2);
        margin-left: auto;
      }

      .text-deposit {
        color: var(--fin-green);
      }

      .text-withdraw {
        color: var(--fin-red);
      }

      td {
        border: 1px solid var(--fin-neutral-5);
        text-align: left;
        padding: 0.5rem;
      }

      .edit-cell {
        text-align: right;
        white-space: nowrap;
        padding: 0.25rem 0 0.25rem 0.25rem;
        width: 3rem;
        border: 1px solid transparent;
        border-left-color: var(--fin-neutral-5);
      }

      td:nth-child(1),
      td:nth-child(3) {
        white-space: nowrap;
        width: 1px;
      }

      td:nth-child(4) {
        white-space: nowrap;
        width: 5px;
      }

      td:nth-child(2) {
        max-width: 8rem;
        word-wrap: break-word;
      }

      .filterBox {
        display: flex;
        align-items: flex-end;
        background-color: rgba(245, 245, 245, 1);
        border-radius: 0.625rem;
        padding: 0.14rem;
      }

      .clear-btn {
        height: 2.25rem;
        padding: 0 1rem;
        margin: 0.25rem 0.75rem 0.25rem 0;
        border: 1px solid var(--fin-neutral-4);
        border-radius: var(--fin-radius-sm);
        background: var(--fin-white);
        color: var(--fin-neutral-1);
        font-size: 0.875rem;
        font-family: Inter, sans-serif;
        font-weight: 500;
        cursor: pointer;
        transition: border-color 0.15s, color 0.15s;
      }

      .clear-btn:hover {
        border-color: var(--fin-pink);
        color: var(--fin-pink);
      }

      .summary-cards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
      }

      .stat-card {
        background: var(--fin-white);
        border-radius: var(--fin-radius);
        border: 1px solid var(--fin-neutral-5);
        border-left: 3px solid var(--fin-neutral-4);
        box-shadow: var(--fin-shadow-xs);
        padding: 1rem 1.25rem;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
      }

      .stat-card--green { border-left-color: var(--fin-green); }
      .stat-card--red { border-left-color: var(--fin-red); }
      .stat-card--primary { border-left-color: var(--fin-pink); }

      .stat-label {
        font-size: 0.6875rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        color: var(--fin-neutral-2);
      }

      .stat-value {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--fin-black);
      }

      .stat-value--green { color: var(--fin-green); }
      .stat-value--red { color: var(--fin-red); }
    `,
  ],
})
export class AccountComponent implements OnInit {
  accountID!: string;
  accountIndex!: number;

  transactionTableData!: Array<any>;
  overallAccountData: Array<any> = [];
  error!: string;
  userID: string = localStorage.getItem('userId');
  transactionData: any[] = [];

  accountUtils: any = accountUtils;
  dateUtils: any = dateUtils;
  yearData: any = dateUtils.yearData(Number(new Date().getFullYear()) - 10);

  month: string = null;
  year: string = null;
  transactionGroup: string = '';
  transactionType: string = null;

  transactionTypeData = [null, 'Deposit', 'Withdraw'];

  filteredData: any[] = [];
  pagedData: any[] = [];
  currentPage = 0;
  readonly pageSize = 10;
  sortColumn: string = null;
  sortDirection: 'asc' | 'desc' = 'asc';
  spendingByGroup: { name: string; value: number }[] = [];
  depositsByGroup: { name: string; value: number }[] = [];
  balanceSeries: { name: string; series: { name: Date; value: number }[] }[] = [{ name: 'Balance', series: [] }];
  editDataMap: { [id: string]: { inputData: any[]; selectData: any[][] } } = {};

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.filteredData.length / this.pageSize));
  }

  constructor(
    private accountApiService: AccountAPIService,
    private transactionApiService: TransactionAPIService,
    private toastService: ToastService
  ) {}

  private recalculate() {
    this.filteredData = this.transactionData
      .filter(t => this.isAll(this.month) || t.transaction_date?.split('-')[1] === this.month)
      .filter(t => this.isAll(this.year) || t.transaction_date?.split('-')[0] === this.year)
      .filter(t => !this.transactionGroup || (t.transaction_group ?? '').search(new RegExp(this.transactionGroup, 'i')) > -1)
      .filter(t => this.isAll(this.transactionType) || t.transaction_type === this.transactionType);

    const spendGroups: { [key: string]: number } = {};
    const depositGroups: { [key: string]: number } = {};
    this.filteredData.forEach((t) => {
      const group = t.transaction_group || 'None';
      if (t.transaction_type === 'Withdraw') {
        spendGroups[group] = (spendGroups[group] || 0) + Number(t.transaction_amount);
      } else if (t.transaction_type === 'Deposit') {
        depositGroups[group] = (depositGroups[group] || 0) + Number(t.transaction_amount);
      }
    });

    this.spendingByGroup = Object.entries(spendGroups).map(([name, value]) => ({ name, value }));
    this.depositsByGroup = Object.entries(depositGroups)
      .map(([name, value]) => ({ name, value }))
      .sort((a, b) => b.value - a.value);

    const series = this.filteredData
      .slice()
      .sort((a, b) => new Date(a.transaction_date).getTime() - new Date(b.transaction_date).getTime())
      .map((t) => ({ name: new Date(t.transaction_date), value: Number(t.transaction_subTotal) }));
    this.balanceSeries = [{ name: 'Balance', series }];

    this.currentPage = 0;
    this.updatePagedData();
  }

  private updatePagedData() {
    const data = this.getSortedFilteredData();
    const start = this.currentPage * this.pageSize;
    this.pagedData = data.slice(start, start + this.pageSize);
  }

  private getSortedFilteredData(): any[] {
    if (!this.sortColumn) {
      return this.filteredData;
    }

    const dir = this.sortDirection === 'asc' ? 1 : -1;
    const key = this.sortColumn === 'Date' ? 'transaction_date' : 'transaction_group';

    return [...this.filteredData].sort((a, b) => {
      const av = (a[key] ?? '').toLowerCase();
      const bv = (b[key] ?? '').toLowerCase();
      return av < bv ? -dir : av > bv ? dir : 0;
    });
  }

  onSortChange(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }
    this.currentPage = 0;
    this.updatePagedData();
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updatePagedData();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePagedData();
    }
  }

  postTransactionData() {
    this.accountID = new URLSearchParams(window.location.search).get('id');
    const transactionTypeNum = (
      document.getElementById('select') as HTMLInputElement
    ).value;
    const transactionDate = (
      document.getElementById('date') as HTMLInputElement
    ).value;
    const transactionAmount = (
      document.getElementById('amount') as HTMLInputElement
    ).value;
    const transactionGroup = (
      document.getElementById('group') as HTMLInputElement
    ).value;

    if (transactionTypeNum === '1') {
      this.transactionType = 'Deposit';
    } else if (transactionTypeNum === '2') {
      this.transactionType = 'Withdraw';
    }
    if (
      transactionTypeNum === '0' ||
      transactionDate === '' ||
      transactionAmount === ''
    ) {
      this.error = 'Please fill out all fields';
    } else if (this.isBeforeStartingDate(transactionDate)) {
      this.error = 'Transaction date cannot be before the starting balance date';
    } else {
      this.error = undefined;
      const body = JSON.stringify({
        account_id: { account_id: this.accountID },
        transaction_type: this.transactionType,
        transaction_date: transactionDate,
        transaction_amount: transactionAmount,
        transaction_group: transactionGroup,
      });
      this.transactionApiService.postTransactionData(body, () => {
        this.toastService.queue('Transaction added', 'success');
        location.reload();
      });
    }
  }

  updateTransaction(transaction: any) {
    const modal = document.getElementById(`transaction-${transaction.transaction_id}`);
    const transactionTypeNum = (modal?.querySelector('select') as HTMLSelectElement)?.value;
    const transactionDate = (modal?.querySelector('#date') as HTMLInputElement)?.value;
    const transactionAmount = (modal?.querySelector('#amount') as HTMLInputElement)?.value;
    const transactionGroup = (modal?.querySelector('#group') as HTMLInputElement)?.value;

    let transactionType: string;
    if (transactionTypeNum === '1') transactionType = 'Deposit';
    else if (transactionTypeNum === '2') transactionType = 'Withdraw';
    else transactionType = transaction.transaction_type;

    if (!transactionDate || !transactionAmount) {
      this.error = 'Please fill out all fields';
      return;
    }
    if (this.isStartingAmountTransaction(transaction) && this.isAfterFirstTransactionDate(transactionDate, transaction.transaction_id)) {
      this.error = 'Starting Amount date must be before all other transactions';
      return;
    }
    if (!this.isStartingAmountTransaction(transaction) && this.isBeforeStartingDate(transactionDate)) {
      this.error = 'Transaction date cannot be before the starting balance date';
      return;
    }

    this.error = undefined;
    const body = JSON.stringify({
      transaction_id: transaction.transaction_id,
      account_id: { account_id: this.accountID },
      transaction_type: transactionType,
      transaction_date: transactionDate,
      transaction_amount: transactionAmount,
      transaction_group: transactionGroup,
    });
    this.transactionApiService.updateTransaction(body, () => {
      this.toastService.queue('Transaction updated', 'success');
      location.reload();
    });
  }

  deleteTransaction(transaction: any): void {
    if (window.confirm('Are sure you want to delete this item ?')) {
      const body = JSON.stringify({
        account_id: { account_id: transaction.account_id },
        transaction_id: transaction.transaction_id,
      });
      this.transactionApiService.deleteTransaction(body, () => {
        this.toastService.queue('Transaction deleted', 'success');
        location.reload();
      });
    }
  }

  monthHandler(search: string) { this.month = search; this.recalculate(); }
  yearHandler(search: string) { this.year = search; this.recalculate(); }
  transactionGroupSearchHandler(search: string) { this.transactionGroup = search; this.recalculate(); }
  transactionTypeHandler(search: string) { this.transactionType = search; this.recalculate(); }

  isAll(v: any): boolean { return !v || v === 'null'; }

  get hasActiveFilters(): boolean {
    return !this.isAll(this.month) || !this.isAll(this.year) || !!this.transactionGroup || !this.isAll(this.transactionType);
  }


  clearFilters() {
    this.month = null;
    this.year = null;
    this.transactionGroup = '';
    this.transactionType = null;
    this.recalculate();
  }

  getTransactionTableData(transaction: any) {
    this.transactionTableData = [
      dateUtils.dateFormatter(transaction.transaction_date),
      transaction.transaction_group || 'None',
      '$' + transaction.transaction_amount,
      '$' + transaction.transaction_subTotal,
    ];
    return this.transactionTableData;
  }

  exportTransactionsCsv() {
    const rows = this.getSortedFilteredData();
    if (rows.length === 0) {
      return;
    }

    const headers = ['Date', 'Type', 'Group', 'Amount', 'Sub-Total'];
    const csvRows = [
      headers,
      ...rows.map((transaction) => [
        dateUtils.dateFormatter(transaction.transaction_date),
        transaction.transaction_type,
        transaction.transaction_group || 'None',
        transaction.transaction_amount,
        transaction.transaction_subTotal,
      ]),
    ];
    const csv = csvRows.map((row) => row.map((value) => this.csvCell(value)).join(',')).join('\r\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.href = url;
    link.download = this.getCsvFileName();
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  private csvCell(value: any): string {
    const text = value === null || value === undefined ? '' : String(value);
    return `"${text.replace(/"/g, '""')}"`;
  }

  private getCsvFileName(): string {
    const accountName = (this.overallAccountData[0] || 'account')
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    const filterParts = [
      this.isAll(this.year) ? null : this.year,
      this.isAll(this.month) ? null : this.month,
      this.isAll(this.transactionType) ? null : this.transactionType.toLowerCase(),
      this.transactionGroup ? this.transactionGroup.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') : null,
    ].filter(Boolean);
    const suffix = filterParts.length ? `-${filterParts.join('-')}` : '';

    return `${accountName || 'account'}-transactions${suffix}.csv`;
  }

  private isBeforeStartingDate(transactionDate: string): boolean {
    const startingDate = this.overallAccountData[6];
    return !!startingDate && transactionDate < startingDate;
  }

  private isStartingAmountTransaction(transaction: any): boolean {
    return transaction.transaction_group === 'Starting Amount';
  }

  private isAfterFirstTransactionDate(startingDate: string, startingTransactionId: string): boolean {
    const firstTransactionDate = this.transactionData
      .filter(t => t.transaction_id !== startingTransactionId)
      .map(t => t.transaction_date?.split('T')[0])
      .filter(Boolean)
      .sort()[0];

    return !!firstTransactionDate && startingDate > firstTransactionDate;
  }

  ngOnInit() {
    this.accountID = new URLSearchParams(window.location.search).get('id');

    this.accountApiService.getAccountDataAsync((d: any) => {
      this.accountIndex = d.findIndex(
        (account) => account.account_id === this.accountID
      );
      this.overallAccountData = [
        d[this.accountIndex].account_Description,
        d[this.accountIndex].account_Starting_Amount,
        d[this.accountIndex].deposit_amount,
        d[this.accountIndex].withdraw_amount,
        d[this.accountIndex].account_Current_Amount,
        d[this.accountIndex].account_Difference,
        d[this.accountIndex].account_Starting_Date?.split('T')[0],
      ];
    }, this.userID);

    this.transactionApiService.getTransactionDataAsync((d: Transaction) => {
      this.transactionData = d as any;
      this.editDataMap = {};
      (this.transactionData as any[]).forEach(t => {
        this.editDataMap[t.transaction_id] = {
          inputData: accountUtils.inputDataFunc(t),
          selectData: accountUtils.selectDataFunc(t),
        };
      });
      this.recalculate();
    }, this.accountID);
  }
}
