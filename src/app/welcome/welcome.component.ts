import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // template:'<h1>{{ title }} app is running!</h1>',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'welcome page title'

  message = 'Some welcome message';
  name = '';

  constructor(private route : ActivatedRoute) { }//dependency injection

  ngOnInit(): void {
    console.log(this.message);
    //console.log(this.route.snapshot.params['params']);//will provide snapshot(print parms) of params
    this.name = this.route.snapshot.params['params'];//activated route are used to print the incoming parmeter along with the routes and that route will be defined in routing module
  }

}
