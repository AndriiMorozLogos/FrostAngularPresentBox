import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('src/app/modules/registration/registration.module').then(m => m.RegistrationModule)
  },
  {path: 'login', loadChildren: () => import('src/app/modules/login/login.module').then(l => l.LoginModule)}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


