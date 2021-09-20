import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { LoginComponent } from './pages/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { CardWelcomeComponent } from './components/card-welcome/card-welcome.component';
import { CardSelectionLoginComponent } from './components/card-selection-login/card-selection-login.component';



@NgModule({
  declarations: [  
    WelcomeComponent,
    LoginComponent,
    CardWelcomeComponent,
    CardSelectionLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
