import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:params', component: WelcomeComponent },//defined routes
  { path: 'todos', component: ListTodosComponent },
  { path: '**', component: ErrorComponent }//should be the last as it matches anything except above
  //if anything is below this then also it will come in this very path only so no use. hence every
  //other path will be above this one.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
