import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';

import {
  DashboardComponent,
} from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  imports: [CommonModule, PagesRoutingModule],
  declarations: [
    ItemsComponent,
    DashboardComponent,
  ],
  exports: [DashboardComponent],
})
export class PagesModule { }
