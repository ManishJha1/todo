import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },//canActivate: [RouteGuardService] // this will not let u enter into the pages where it is applied once you have been logged out.
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:params', component: WelcomeComponent, canActivate: [RouteGuardService]},//defined routes
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent },


  { path: '**', component: ErrorComponent }//should be the last as it matches anything except above
  //if anything is below this then also it will come in this very path only so no use. hence every
  //other path will be above this one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
