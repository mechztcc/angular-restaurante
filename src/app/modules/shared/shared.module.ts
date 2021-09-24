import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavegationComponent } from './components/navegation/navegation.component';
import { WavesTopComponent } from './components/waves-top/waves-top.component';
import { WavesBottomComponent } from './components/waves-bottom/waves-bottom.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [
    NavegationComponent,
    WavesTopComponent,
    WavesBottomComponent,
    HomeAdminComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    NavegationComponent,
    WavesTopComponent,
    WavesBottomComponent,
    NavbarComponent
  ]
})
export class SharedModule { }
