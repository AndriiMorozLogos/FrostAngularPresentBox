import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Interceptor} from './interceptor.interceptor';
import {UserResolverService} from "./services/resolvers/user.resolver.service";
import * as firebase from 'firebase';
import {environment} from '../environments/environment';
firebase.initializeApp(environment.firebaseConfig);


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    UserResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
