//app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule,CommonModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     
     FormsModule,
     ReactiveFormsModule

  ],
  exports:[
  //  LoginComponent
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
