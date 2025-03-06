import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../core/components/Navbar/Navbar.component';
import { SideNavComponent } from "../../core/components/SideNav/SideNav.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterOutlet, NavbarComponent, SideNavComponent],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  lastVal = localStorage.getItem('lastVal');
  menuValue: boolean = this.lastVal == null ? true : this.lastVal != 'true' ? false : true;
  openCloseMenu() {
    this.menuValue = !this.menuValue;
    localStorage.setItem('lastVal', this.menuValue ? 'true' : 'false');
  }

}
