import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ChildComponent } from './child.component';

const routes: Routes = [
  { path: 'login', component: ChildComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
]

/* eslint-disable */

@Component({
  selector: 'ralbx2-layout',
  template: `
   
    <div class="wrapper">
      World!
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class BLayoutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
