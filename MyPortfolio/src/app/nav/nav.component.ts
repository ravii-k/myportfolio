import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isCollapsed = true;

  @HostListener('document:click', ['$event']) clickedOutside($event) {
    this. collapseNavbar();  // Hide navigation menu on outside click
    // console.log('CLICKED OUTSIDE');
  }
  constructor() { }

  ngOnInit() {
  }

  collapseNavbar() {
    if (this.isCollapsed === false) {
      this.isCollapsed = true;
    }
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();  // <- stop propagation on lower layers
    // console.log('CLICKED INSIDE, MENU WON\'T HIDE');
  }

}
