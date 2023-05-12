import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';
import { P1Component } from './p1/p1.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    P1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
