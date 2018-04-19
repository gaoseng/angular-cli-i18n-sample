import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from "@angular/router";

import { HomeComponent } from './home/home.component';


const appRoute: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: HomeComponent
    }
] 

@NgModule({
    declarations: [],
    imports: [ CommonModule,RouterModule.forRoot(appRoute) ],
    exports: [
        RouterModule
    ],
    providers: [],
})
export class AppRoutingModule {

}