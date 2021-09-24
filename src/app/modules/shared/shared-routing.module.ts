import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/core/guards/session.guard';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';


const routes: Routes = [
  { path: '', component: HomeAdminComponent, canActivate: [SessionGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
