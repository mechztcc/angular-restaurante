import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpErrorHandlerInterceptor } from './core/interceptors/http-error/http-error-handler.interceptor';
import { TokenHandlerInterceptor } from './core/interceptors/token-handler/token-handler.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NotifierModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorHandlerInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenHandlerInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
