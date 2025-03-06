import { Component, Input, OnInit } from '@angular/core';
import { UserTypesEnum } from '../../enums/enums';
import { defaultMenu, Environment } from '../../../../environments/env';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../auth/Auth.service';
import { ApiBaseService } from '../../Base/ApiBaseService.service';
import { NgFor, NgStyle } from '@angular/common';
import { CustomMenuItemComponent } from "./CustomMenuItem/CustomMenuItem.component";

@Component({
  selector: 'app-SideNav',
  templateUrl: './SideNav.component.html',
  styleUrl: './SideNav.component.scss',
  imports: [NgFor, NgStyle, CustomMenuItemComponent]
})
export class SideNavComponent implements OnInit {
  @Input() menuValue!: boolean;
  // ================================
  role!: number
  userTypesEnum = UserTypesEnum;
  menu = ((environment as Environment).menu ?? defaultMenu);

  constructor(private authService: AuthService, private _apiBaseService: ApiBaseService) {
    this.role = this.authService.getUserRole();
  }

  ngOnInit(): void {
    let max = 0;
    for (let i = 0; i < this.menu.length; i++) {
      this.menu[i].index = max;
      max++;
      if ((this.menu[i].children?.length ?? 0) > 0) {
        for (let j = 0; j < this.menu[i]!.children!.length; j++) {
          this.menu[i]!.children![j]!.index = max;
          max++;
        }
      }
    }
  }
  async logout() {
    let res = await this._apiBaseService.apiClient.accountLogoutCreate();
    if (res.data.isSuccess) {
      this.authService.logOut();
    }
  }

}
