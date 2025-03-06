export class CookiesConstants {
  static #projectName = 'rasd_';
  static set(text: any) {
    return `${this.#projectName}${text}`;
  }
  static authUserToken = this.set('USER_TOKEN');
  static authUserRefreshToken = this.set('USER_REFRESH_TOKEN');
  static authOtpData = this.set('otpData');
  static authLoginData = this.set('loginData');
  static authUserRole = this.set('role');
  static authUserEmail = this.set('email');
  static authCode = this.set('code');
  static password = this.set('qaz');
  
  static mapToolDomain = 'map__information__geojson';
}
