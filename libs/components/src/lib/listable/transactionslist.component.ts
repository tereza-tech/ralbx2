import { Component } from '@angular/core';
import { Transaction } from './Transaction';
import { TransactionService } from './transactions.service';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
    template: `
        <p-table [value]="transactions" [paginator]="true" [rows]="5" [responsive]="true">
            <ng-template pTemplate="header">
                <tr>
                    <th pSortableColumn="name">Name <p-sortIcon field="vin"></p-sortIcon></th>
                    <th pSortableColumn="price">Brand <p-sortIcon field="price"></p-sortIcon></th>
                    <th pSortableColumn="inventoryStatus">Status <p-sortIcon field="inventoryStatus"></p-sortIcon></th>
                    <th style="width:4em"></th>
                </tr>
            </ng-template>
            <ng-template pTemplate="body" let-transaction>
                <tr>
                    <td>{{transaction.name}}</td>
                    <td>{{transaction.price}}</td>
                    <td><span [class]="'transaction-badge status-'+transaction.inventoryStatus.toLowerCase()">{{transaction.inventoryStatus}}</span></td>
                    <td>
                        <button type="button" pButton icon="pi pi-search" (click)="selectTransaction(transaction)"></button>
                    </td>
                </tr>
            </ng-template>
        </p-table>
    `
})
export class TransactionsList {

    transactions: Transaction[];

    constructor(private transactionService: TransactionService, public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
        this.transactionService.getTransactionsSmall().then(transactions => this.transactions = transactions);
    }

    selectTransaction(transaction: Transaction) {
        this.ref.close(transaction);
    }
}