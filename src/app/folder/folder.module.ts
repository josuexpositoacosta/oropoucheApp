//folder.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

import { NavComponent } from '../shared/nav/nav.component';
import { PersonalDetailsComponent } from '../components/personal-details/personal-details.component';


import {ReactiveFormsModule} from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptorService, JwtInterceptorService } from '../services/service.index';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoginComponent } from '../auth/login/login.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,

     
    ReactiveFormsModule,
    HttpClientModule,
  ],
  declarations: [
    FolderPage,

    LoginComponent, 
    
    HeaderComponent,
    FooterComponent,

    DashboardComponent,
    
    NavComponent,
    PersonalDetailsComponent    
  ],
  exports:[
 
     
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptorService,multi:true}
  ],
})
export class FolderPageModule {}
