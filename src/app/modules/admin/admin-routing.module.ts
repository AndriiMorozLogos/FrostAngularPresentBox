import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {UsersComponent} from "./components/users/users.component";
import {BuyersResolverService} from "./services/resolvers/buyers.resolver.service";
import {UsersResolverService} from "./services/resolvers/users.resolver.service";
import {OrdersResolverService} from "./services/resolvers/orders.resolver.service";
import {OrdersComponent} from "./components/orders/orders.component";
import {CreatePresentBoxComponent} from "./components/create-present-box/create-present-box.component";


const routes: Routes = [
  {
    path: '', component: AdminPageComponent, children: [
      {path: 'users', resolve: {usersResolverService: UsersResolverService}, component: UsersComponent},
      {path: 'buyers', resolve: {buyersResolverService: BuyersResolverService}, component: UsersComponent},
      {path: 'orders', resolve: {ordersResolverService: OrdersResolverService}, component: OrdersComponent},
      {path: 'create', component: CreatePresentBoxComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
