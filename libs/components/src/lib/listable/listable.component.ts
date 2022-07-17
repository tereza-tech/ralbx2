import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TransactionsList } from './transactionslist.component';
import { Transaction } from './Transaction';
import { DialogService } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'ralbx2-list-table',
  templateUrl: './listable.component.html',
  providers: [DialogService, MessageService]
})
export class ListableComponent {

  constructor(public dialogService: DialogService, public messageService: MessageService) { }

  ref: DynamicDialogRef;

  show() {
    this.ref = this.dialogService.open(TransactionsList, {
      header: 'Choose a Transaction',
      width: '70%',
      contentStyle: { "max-height": "500px", "overflow": "auto" },
      baseZIndex: 10000
    });

    this.ref.onClose.subscribe((product: Transaction) => {
      if (product) {
        this.messageService.add({ severity: 'info', summary: 'Transaction Selected', detail: product.name });
      }
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
