import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Raghav';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;


  constructor(private router: Router) { }//dependency injection

  ngOnInit(): void {
  }

  handleLogin(){
    //console.log(this.username);
    //console.log(this.password);
    if(this.username==='Raghav' && this.password=== 'dummy'){
      this.router.navigate(['welcome', this.username]);//implementation of route (passing path and params)
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
