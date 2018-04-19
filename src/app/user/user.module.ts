import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserListComponent } from "./user-list/user-list.component";

import { UserRoutingModule } from "./user.routing.module";
import { UserGuardService } from "./user-guard.service";

@NgModule({
    declarations: [
        UserDetailComponent,
        UserListComponent
    ],
    imports: [ CommonModule,UserRoutingModule ],
    exports: [],
    providers: [UserGuardService],
})
export class UserModule {}