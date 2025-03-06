import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/Auth.service';
import { ApiBaseService } from '../../Base/ApiBaseService.service';
import { ProjectNameComponent } from "../env/project-name/project-name.component";
import { NotificationsCardComponent } from '../../../features/Notifications/NotificationsCard/NotificationsCard.component';
NotificationsCardComponent
@Component({
  selector: 'app-Navbar',
  templateUrl: './Navbar.component.html',
  styleUrl: './Navbar.component.scss',
  imports: [ProjectNameComponent, NotificationsCardComponent]
})
export class NavbarComponent implements OnInit {

  
  @Output() openMenu = new EventEmitter<boolean>();
  profileData: any;

  openMenuClickHandeler() {
    this.openMenu.emit();
  }
  // ==========================================
  // ==========================================
  constructor(private authService: AuthService, 
    private _apiBaseService: ApiBaseService) { }
  ngOnInit(): void {
    this.getProfile();
  }
  // Get Profile
  async getProfile() {
    let res = await this._apiBaseService.apiClient.accountGetProfileList();
    this.profileData = res.data.data;
  }
  // logout
  async logout() {
    let res = await this._apiBaseService.apiClient.accountLogoutCreate();
    if (res.data.isSuccess) {
      this.authService.logOut();
    }
  }
}
