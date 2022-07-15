import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XsConfirmBtnComponent } from './buttons/xs-confirm/xs-confirm.component';
import { MdConfirmBtnComponent } from './buttons/md-confirm/md-confirm.component';
import { XlConfirmBtnComponent } from './buttons/xl-confirm/xl-confirm.component';

@NgModule({
  imports: [CommonModule],
  declarations: [XsConfirmBtnComponent, MdConfirmBtnComponent, XlConfirmBtnComponent],
  exports: [XsConfirmBtnComponent, MdConfirmBtnComponent, XlConfirmBtnComponent],
})
export class ComponentsModule { }
