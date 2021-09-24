import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CardWelcomeComponent } from './components/card-welcome/card-welcome.component';
import { CardSelectionLoginComponent } from './components/card-selection-login/card-selection-login.component';
import { CardLoginAdminComponent } from './components/card-login-admin/card-login-admin.component';
import { CardLoginEmployeeComponent } from './components/card-login-employee/card-login-employee.component';
import { LoginEmployeeComponent } from './pages/login-employee/login-employee.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { CardCreateAccountComponent } from './components/card-create-account/card-create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [  
    WelcomeComponent,
    LoginComponent,
    CardWelcomeComponent,
    CardSelectionLoginComponent,
    CardLoginAdminComponent,
    CardLoginEmployeeComponent,
    LoginEmployeeComponent,
    CreateAccountComponent,
    CardCreateAccountComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UserModule { }
