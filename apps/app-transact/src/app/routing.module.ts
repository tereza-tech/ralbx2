import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutComponent, RouterModule],
  imports: [BrowserModule],
  exports: []
})
export class RoutingModule { }
