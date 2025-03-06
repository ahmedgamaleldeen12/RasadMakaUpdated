import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './Auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  constructor(
    public auth: AuthService,
    public router: Router) {}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    const expectedRole = childRoute.data['expectedRole'];
    if (!expectedRole) {
      return true;
    }
    let userRole = this.auth.getUserRole();
    if (!userRole) {
      this.router.navigate(['auth/login']);
      return false;
    }
    if (Array.isArray(expectedRole) && !expectedRole.includes(userRole)) {
      this.router.navigate(['/']);
      return false;
    } else if (!Array.isArray(expectedRole) && userRole !== expectedRole) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
