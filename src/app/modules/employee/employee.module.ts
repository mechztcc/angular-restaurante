import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { ListComponent } from './pages/list/list.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CreateComponent } from './pages/create/create.component';


@NgModule({
  declarations: [
    ListComponent,
    CardListComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
