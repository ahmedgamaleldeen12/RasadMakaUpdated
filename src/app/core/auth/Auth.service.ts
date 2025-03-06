import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CookiesConstants } from '../constants/CookiesConstants';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) { }
  isAuthenticated(): boolean {
    return this.getUserRole() > 0;
  }

  getToken(): string {
    return this.cookieService.get('http-token');
  }

  getRefreshToken(): string {
    return this.cookieService.get('http-rtoken');
  }

  getUserRole(): number {
    return parseInt(this.cookieService.get(CookiesConstants.authUserRole) || '0', 10);
  }

  async logOut(): Promise<void> {
    this.clearCookies();
    window.location.reload();
  }

  private clearCookies(): void {
    [
      CookiesConstants.authUserRole,
      CookiesConstants.authUserToken,
      CookiesConstants.authUserRefreshToken,
    ].forEach((cookie) => this.cookieService.delete(cookie, '/'));
    this.cookieService.deleteAll();
  }

}
