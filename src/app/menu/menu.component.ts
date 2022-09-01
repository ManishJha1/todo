import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //isUserLoggedIn: boolean = false;

  constructor(public hardcodedAuthentication: HardcodedAuthenticationService) { }

  ngOnInit(): void {
    //this.isUserLoggedIn = this.hardcodedAuthentication.isUserLoggedIn();
    ////even though you will clear sessionStorage
    ////this will result in only one time show it will not show things again although page is responsive as this is SPA so menu and todo pages are loaded/refreshed only once.
  }

}
