import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AxiosResponse } from 'axios';
import { Api } from '../../data/Api';
import { environment } from '../../../environments/environment';
import { AuthService } from '../auth/Auth.service';
@Injectable({
  providedIn: 'root'
})
export class ApiBaseServiceService {

constructor() { }

}


@Injectable({
  providedIn: 'root',
})
export class ApiBaseService {
  apiClient!: Api;
  private isRefreshing = false; // Mutex flag
  private refreshPromise: Promise<any> | null = null; // Store refresh token request

  constructor(public authService: AuthService, private cookieService: CookieService) {
    this.#initClient();
  }

  #initClient() {
    if (window.location.protocol == 'https:') {
      this.apiClient = new Api({ baseURL: environment.apiUrl, withCredentials: true });
    } else {
      this.apiClient = new Api({ baseURL: environment.apiUrl });
    }

    this.apiClient.instance.interceptors.request.use((req) => {
      let token = this.cookieService.get('http-token');
      if (token) {
        req.headers[environment.authHeader!] = token;
      }
      return req;
    });

    this.apiClient.instance.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        if (error.response.status === 401) {
          return this.handle401Error(error);
        }
        return Promise.reject(error);
      }
    );
  }

  private async handle401Error(error: any) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshPromise = this.refreshToken(); // Store refresh request
    }

    try {
      await this.refreshPromise; // Wait for refresh token request to complete
      return this.apiClient.instance.request(error.config); // Retry failed request again
    } catch (refreshError) {
      this.authService.logOut();
      return Promise.reject(refreshError);
    } finally {
      this.isRefreshing = false;
      this.refreshPromise = null;
    }
  }

  private async refreshToken() {
    try {
      const refreshToken = this.authService.getRefreshToken();
      const accessToken = this.authService.getToken();

      const res = await this.apiClient.accountRefreshTokenCreate({ oldToken: accessToken, refreshToken: refreshToken });

      if (window.location.protocol == 'http:') {
        this.cookieService.delete('http-token');
        this.cookieService.delete('http-rtoken');
        this.cookieService.set('http-token', res.headers["http-token"], undefined, "/", undefined, false, "Lax");
        this.cookieService.set('http-rtoken', res.headers["http-rtoken"], undefined, "/", undefined, false, "Lax");
      }

      if (!res.data.isSuccess) {
        throw new Error("Refresh token failed");
      }
    } catch (error) {
      throw error;
    }
  }
}
