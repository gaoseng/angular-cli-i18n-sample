import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from "@angular/router";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import {HttpClient} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';


// router:管理一个组件到另一个组件的切换


import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";

import { UserModule } from "./user/user.module";

import { HomeComponent } from './home/home.component';
import { HttpService } from './config/http.service';



export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/app/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (HttpLoaderFactory),
      deps: [HttpClient]
    }),
    UserModule,
    
    AppRoutingModule
     //RouterModule 提供所需的服务商，用来视图之间进行导航的指令
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
