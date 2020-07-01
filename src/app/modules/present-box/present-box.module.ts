import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PresentBoxRoutingModule} from './present-box-routing.module';
import {PresentBoxComponent} from './components/present-box/present-box.component';
import {PresentBoxContainerComponent} from './components/present-box-container/present-box-container.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PresentBoxResolverService} from "./services/resolver/presentBox.resolver.service";
import {PresentBoxPreviewComponent} from "./components/present-box-preview/present-box-preview.component";



@NgModule({
  declarations: [PresentBoxComponent, PresentBoxContainerComponent, PresentBoxPreviewComponent],
  imports: [
    CommonModule,
    PresentBoxRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PresentBoxResolverService]
})
export class PresentBoxModule {
}
