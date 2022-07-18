import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'ralbx2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'app-transactió';
  currPage: string = 'Ticket Manager';
  createModalOpen: boolean = false;
  toggleModal = () => {
    this.createModalOpen = !this.createModalOpen
  }
  constructor(private primengConfig: PrimeNGConfig) {

  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}