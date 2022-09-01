import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  // template:'<h1>{{ title }} app is running!</h1>',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  title = 'welcome page title'

  message = 'Some welcome message';
  welcomeMessageFromService!: string;
  name = '';

  constructor(
    private route : ActivatedRoute,
    private welcomeData : WelcomeDataService
    ) { }//dependency injection

  ngOnInit(): void {
    console.log(this.message);
    //console.log(this.route.snapshot.params['params']);//will provide snapshot(print parms) of params
    this.name = this.route.snapshot.params['params'];//activated route are used to print the incoming parmeter along with the routes and that route will be defined in routing module
  }

  getWelcomeMessage(){
    //console.log(this.welcomeData.executeHelloWorldBeanService());//will show object
    // this.welcomeData.executeHelloWorldBeanService()// if not subscribed will not work as observables are invoked when subscribed
    this.welcomeData.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),//it directs to handleSuccessfulResponse function
      error => this.handleErrorResponse(error)//it handles common error response by directing it to handleErrorResponse
    );
    console.log('last line of getMessage');
    //console.log('Get welcome message');
  }

  getWelcomeMessageWithParameter(){
    //console.log(this.welcomeData.executeHelloWorldBeanService());//will show object
    // this.welcomeData.executeHelloWorldBeanService()// if not subscribed will not work as observables are invoked when subscribed
    this.welcomeData.executeHelloWorldServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),//it directs to handleSuccessfulResponse function
      error => this.handleErrorResponse(error)//it handles common error response by directing it to handleErrorResponse
    );
    console.log('last line of getMessage');
    //console.log('Get welcome message');
  }

  //used to check response object and specific message.
  handleSuccessfulResponse(response: any){
    this.welcomeMessageFromService = response.message
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any){
    // console.log(error);
    // console.log(error.error);
    // console.log(error.error.message);
    this.welcomeMessageFromService = error.error.message;
  }

}
