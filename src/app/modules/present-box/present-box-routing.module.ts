import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PresentBoxContainerComponent} from "./components/present-box-container/present-box-container.component";
import {PresentBoxComponent} from "./components/present-box/present-box.component";
import {PresentBoxResolverService} from "./services/resolver/presentBox.resolver.service";
import {PresentBoxesResolverService} from "./services/resolver/presentBoxes.resolver.service";


const routes: Routes = [
  {
    path: '',
    resolve: {presentBoxesResolverService: PresentBoxesResolverService},
    component: PresentBoxContainerComponent
  },
  {
    path: 'box/:id',
    resolve: {presentBoxResolverService: PresentBoxResolverService},
    component: PresentBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentBoxRoutingModule {
}
