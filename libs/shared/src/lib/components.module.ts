import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import { CheckboxModule } from 'primeng/checkbox';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MessageService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterbarModule } from './filterbar/filterbar.module';
import { XsConfirmBtnComponent } from './buttons/xs-confirm/xs-confirm.component';
import { MdConfirmBtnComponent } from './buttons/md-confirm/md-confirm.component';
import { XlConfirmBtnComponent } from './buttons/xl-confirm/xl-confirm.component';
import { ModalComponent } from './modal/modal.component';
import {} from '@ralbx2/models/interfaces'

@NgModule({
  declarations: [
    SidebarComponent,
    XsConfirmBtnComponent,
    MdConfirmBtnComponent,
    XlConfirmBtnComponent
  ],
  imports: [
    CommonModule,
    CheckboxModule,
    RadioButtonModule,
    OverlayPanelModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    TableModule,
  ],
  exports: [
    SidebarComponent,
    FilterbarModule,
    XsConfirmBtnComponent,
    MdConfirmBtnComponent,
    XlConfirmBtnComponent,
  ],
  providers: [MessageService],
})
export class ComponentsModule { }
