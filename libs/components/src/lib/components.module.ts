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

import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterbarComponent } from './filterbar/filterbar.component';
import { XsConfirmBtnComponent } from './buttons/xs-confirm/xs-confirm.component';
import { MdConfirmBtnComponent } from './buttons/md-confirm/md-confirm.component';
import { XlConfirmBtnComponent } from './buttons/xl-confirm/xl-confirm.component';

@NgModule({
  declarations: [SidebarComponent, FilterbarComponent, XsConfirmBtnComponent, MdConfirmBtnComponent, XlConfirmBtnComponent],
  imports: [CommonModule, CheckboxModule, RadioButtonModule, OverlayPanelModule, ButtonModule, ToastModule, InputTextModule, FormsModule],
  exports: [SidebarComponent, FilterbarComponent, XsConfirmBtnComponent, MdConfirmBtnComponent, XlConfirmBtnComponent],
  providers: [MessageService]
})
export class ComponentsModule { }
