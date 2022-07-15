import { Component, OnInit, ViewEncapsulation } from '@angular/core';

/* eslint-disable */

@Component({
  selector: 'ralbx2-child',
  template: `
   
    <div class="wrapper">
      Ouií
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class ChildComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
