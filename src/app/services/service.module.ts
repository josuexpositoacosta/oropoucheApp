import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


import {
  ErrorInterceptorService,
  JwtInterceptorService,
  LoginService,
  UserService,
  LoginGuardService
  
 } from './service.index';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],

  providers: [
    ErrorInterceptorService,
    JwtInterceptorService,
    LoginService,
    UserService,
    
  ],
  declarations: []
})
export class ServiceModule { }
