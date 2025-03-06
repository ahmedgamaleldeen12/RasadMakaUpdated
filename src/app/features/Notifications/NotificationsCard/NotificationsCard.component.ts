import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/auth/Auth.service';
import { ApiBaseService } from '../../../core/Base/ApiBaseService.service';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-NotificationsCard',
  templateUrl: './NotificationsCard.component.html',
  styleUrl: './NotificationsCard.component.scss',
  imports:[NgFor,NgClass, NgIf]
})
export class NotificationsCardComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private _router: Router,
    private _apiBaseService: ApiBaseService,

  ) { }
  notifications: any[] = [];
  // GET ALL NOTIFICATIONS
  async getAllNotifications() {
    let res = await this._apiBaseService.apiClient.notificationGetResultsByFilterList();
    if(res.data.isSuccess){
      this.notifications = res.data.data?.items ?? [];
      this.numberOfNotification();
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

  //Number of Notifications
  numOfNotifi!: number;
  async numberOfNotification() {
    let res = await this._apiBaseService.apiClient.notificationGetUnReadedNotificationCountList();
    if(res.data.isSuccess){
      this.numOfNotifi = res.data.data!;
    }
  }
  ngOnInit(): void {
    this.getAllNotifications();
    this.numberOfNotification();
  }

  getAccessToken(): any {
    return this.authService.getToken();
  }
  
}
