import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { PagesRoutingModule } from './pages-routing.module';

import {
  DashboardComponent,
} from './lib/dashboard/dashboard.component';
import { ItemsComponent } from './lib/items/items.component';
import { LayoutComponent } from './lib/layout/layout.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ItemsComponent,
    DashboardComponent,
    LayoutComponent
  ],
  exports: [],
})
export class PagesModule { }
