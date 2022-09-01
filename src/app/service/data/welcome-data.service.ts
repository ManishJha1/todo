import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class HelloWorldBean {// creating a simple bean defining the structure of the response.
  constructor(public message: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http : HttpClient//for this you have to install @angular/common and then find it in http folder
    //to use any utility module we have to import that module in app.module.ts otherwise
    // it will throw error : NullInjectorError: No provider for HttpClient!
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean');
    //console.log("Execute Hello World Bean Service");
  }

  //(http://localhost:8080/hello-world/path-variable/Raghav);//Raghav here is parameter also known as path variable
  executeHelloWorldServiceWithParameter(name: any){
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
  }

}
