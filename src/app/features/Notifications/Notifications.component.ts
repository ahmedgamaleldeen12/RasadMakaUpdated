import { Component, OnInit } from '@angular/core';
import { ApiBaseService } from '../../core/Base/ApiBaseService.service';
import { Router } from '@angular/router';
import { ClientNameComponent } from '../../core/components/env/client-name-component/client-name.component';
import { DatePipe, NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-Notifications',
  templateUrl: './Notifications.component.html',
  styleUrl: './Notifications.component.scss',
  imports: [ClientNameComponent,NgIf, NgClass,DatePipe]
})
export class NotificationsComponent implements OnInit {
  constructor(
    private _apiBaseService: ApiBaseService,
    private _router: Router,
  ) {}
  notifications: any[] = [];
  // GET ALL NOTIFICATIONS
  async getAllNotifications() {
    let res = await this._apiBaseService.apiClient.notificationGetResultsByFilterList();
    if(res.data.isSuccess){
      this.notifications = res.data?.data?.items ?? [];
    }
  }
  // READ ONE NOTIFICATION

  async readOneNotification(not: any) {
    let res = await this._apiBaseService.apiClient.notificationReadList({ id: not.id });
    if(res.data.isSuccess){
      this.getAllNotifications();
    }
    this._router.navigateByUrl(`/incident/details/${not.incidentId}`);
  }
  // READ All NOTIFICATIONS
  async readAllNotification() {
    let res = await this._apiBaseService.apiClient.notificationReadListList();
    if(res.data.isSuccess){
      this.getAllNotifications();
    }
  }

  // ngOnInit
  ngOnInit(): void {
    this.getAllNotifications();
  }

}
