import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './components/main/main.component';
import {PresentBoxesResolverService} from "../present-box/services/resolver/presentBoxes.resolver.service";
import {UserResolverService} from "../user/services/resolvers/user.resolver.service";


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [PresentBoxesResolverService, UserResolverService]
})
export class MainModule {
}
