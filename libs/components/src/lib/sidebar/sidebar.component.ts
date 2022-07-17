import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ralbx2-side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  sideNavOpen: boolean = false;

  toggleSideNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }

  @Input() currPage?: string;
  sideNavIconList: string[] = ['severity--v2', 'two-tickets', 'bar-chart', 'user'];
  sideNavSectionList: string[] = ['Dashboard', 'Ticket Manager', 'Report Generator', 'My Profile'];

  constructor() { }

  givePageName(iconName: string): string {
    return this.sideNavSectionList[this.sideNavIconList.indexOf(iconName)];
  }

  pageActive(iconName: string): Boolean {
    if (this.currPage == this.sideNavSectionList[this.sideNavIconList.indexOf(iconName)]) return true;
    return false;
  }

  goToPage(icon: string) {
    let navigateTo = ''
    switch (icon) {
      case 'severity--v2':
        navigateTo = 'dash';
        break;
      case 'two-tickets':
        navigateTo = 'manage';
        break;
      case 'bar-chart':
        navigateTo = 'reports';
        break;
      case 'user':
        navigateTo = 'user';
        break;
      default:
        break;
    }
    // this.router.navigate([navigateTo])
  }

  ngOnInit(): void {
  }
}
