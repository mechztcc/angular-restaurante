import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) }, 
  { path: 'home', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule) },
  { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
