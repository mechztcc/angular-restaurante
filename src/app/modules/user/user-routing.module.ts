import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CreateSuccessComponent } from './pages/create-success/create-success.component';
import { LoginEmployeeComponent } from './pages/login-employee/login-employee.component';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/employee', component: LoginEmployeeComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'created', component: CreateSuccessComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
