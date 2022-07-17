import { Component } from '@angular/core';

@Component({
  selector: 'ralbx2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app-transact';
  currPage: string = 'Ticket Manager';
  constructor() { }
}
