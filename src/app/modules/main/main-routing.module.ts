import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PresentBoxesResolverService} from "../present-box/services/resolver/presentBoxes.resolver.service";
import {UserResolverService} from "../user/services/resolvers/user.resolver.service";

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: '',
        loadChildren: () => import('src/app/modules/present-box/present-box.module').then(p => p.PresentBoxModule),
        resolve: {presentBoxesResolverService: PresentBoxesResolverService}
      },
      {
        path: 'admin', loadChildren: () => import('src/app/modules/admin/admin.module').then(a => a.AdminModule),
      },
      {
        path: 'user', loadChildren: () => import('src/app/modules/user/user.module').then(u => u.UserModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
