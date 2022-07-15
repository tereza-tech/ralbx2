import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { PagesRoutingModule } from './pages-routing.module';

import {
  DashboardComponent,
} from './lib/dashboard/dashboard.component';
import { ItemsComponent } from './lib/items/items.component';
import { LayoutComponent } from './lib/layout/layout.component';

@NgModule({
  imports: [CommonModule/*, PagesRoutingModule*/],
  declarations: [
    ItemsComponent,
    DashboardComponent,
    LayoutComponent
  ],
  exports: [DashboardComponent, LayoutComponent],
})
export class PagesModule { }
