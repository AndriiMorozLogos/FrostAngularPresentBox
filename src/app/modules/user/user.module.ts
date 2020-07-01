import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './components/user/user.component';
import {AdminsResolverService} from "./services/resolvers/admins.resolver.service";
import {AdminsComponent} from './components/admins/admins.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [UserComponent, AdminsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AdminsResolverService]
})
export class UserModule {
}
