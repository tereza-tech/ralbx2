import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';

import { FilterbarComponent } from './filterbar.component';¨
import {} from '@ralbx2/pages'

@NgModule({
    declarations: [FilterbarComponent],
    imports: [CommonModule, CheckboxModule, RadioButtonModule, OverlayPanelModule, ButtonModule, ToastModule, InputTextModule, FormsModule],
    exports: [FilterbarComponent],
    providers: [MessageService]
})
export class FilterbarModule { }
