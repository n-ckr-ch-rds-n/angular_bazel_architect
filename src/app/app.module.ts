import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FrontendLibModule} from 'frontend-lib';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { FoobarComponent } from './foobar/foobar.component';

@NgModule({
  declarations: [
    AppComponent,
    FoobarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrontendLibModule,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
