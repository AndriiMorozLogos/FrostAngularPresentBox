import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from './components/admin-page/admin-page.component';
import {UsersComponent} from './components/users/users.component';
import {BuyersResolverService} from "./services/resolvers/buyers.resolver.service";
import {UsersResolverService} from "./services/resolvers/users.resolver.service";
import {OrdersComponent} from './components/orders/orders.component';
import {OrdersResolverService} from "./services/resolvers/orders.resolver.service";
import {CreatePresentBoxComponent} from './components/create-present-box/create-present-box.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [AdminPageComponent, UsersComponent, OrdersComponent, CreatePresentBoxComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BuyersResolverService, UsersResolverService, OrdersResolverService]
})
export class AdminModule {
}
