import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

import { StoreModule } from '@ngrx/store';
import { reducers } from './ngrx/root.reducer';
import { ReadComponent } from './read.component';
import { storageSyncMetaReducer } from 'ngrx-store-persist';

import { CardModule } from 'primeng/card';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";

import { ModalComponent } from './modal.component';

@NgModule({
    declarations: [ModalComponent, ReadComponent],
    imports: [StoreModule.forRoot(reducers, { metaReducers: storageSyncMetaReducer }), CommonModule, ButtonModule, RippleModule, DialogModule, FormsModule, CardModule, ReactiveFormsModule, InputTextModule],
    exports: [ModalComponent],
    providers: []
})
export class ModalModule { }
