import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'ralbx2-nx-welcome',
  template: `
   
    <div class="wrapper">
      Helllo
    </div>
    <ralbx2-layout></ralbx2-layout>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
