import { Injectable } from '@angular/core';

@Injectable({//required decorator for a service so that it can inject and dependency injection can happen
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string){
    //console.log('before', this.isUserLoggedIn())
    if(username==='Raghav' && password=== 'dummy'){
      sessionStorage.setItem('authenticaterUser', username);
      //console.log('after', this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
