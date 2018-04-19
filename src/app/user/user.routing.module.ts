import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserGuardService } from "./user-guard.service";



const routes: Routes = [
    {path: 'users',component:UserListComponent,canActivate:[UserGuardService]},
    {path: 'users/:id',component:UserDetailComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {}
