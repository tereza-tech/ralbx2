import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  DashboardComponent,
} from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'items', component: ItemsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }