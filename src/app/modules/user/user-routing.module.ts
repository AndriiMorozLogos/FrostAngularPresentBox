import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./components/user/user.component";
import {AdminsResolverService} from "./services/resolvers/admins.resolver.service";
import {AdminsComponent} from "./components/admins/admins.component";
import {UserResolverService} from "./services/resolvers/user.resolver.service";


const routes: Routes = [
  {
    path: '', resolve: {userResolverService: UserResolverService}, component: UserComponent, children: [
      {path: 'admins', resolve: {adminsResolverService: AdminsResolverService}, component: AdminsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
