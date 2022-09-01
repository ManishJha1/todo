import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private hardcodedAuthentication: HardcodedAuthenticationService,
    private router: Router
    ) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //when the user is logged in then only activate it (here done by returning true)
    //and that will be acheived by sessionStorage which is used in this app to check isLoggedin or not.
    if(this.hardcodedAuthentication.isUserLoggedIn())
      return true;


    this.router.navigate(['login']);//once  you are logged out canActivate is false and hence redirecting to the login page
    return false;
  }
}
