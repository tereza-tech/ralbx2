import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListableComponent } from './listable.component';
import { TransactionsList } from './transactionslist.component';
import { TransactionService } from './transactions.service';

import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        DynamicDialogModule,
        ToastModule,
        TableModule,
        ButtonModule,
        TransactionService
    ],
    declarations: [ListableComponent, TransactionsList],
    bootstrap: [ListableComponent],
    providers: [TransactionService],
    exports: [TableModule, TransactionsList, ListableComponent]
})

export class ListableModule { }
