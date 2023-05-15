import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProComponent } from './pro/pro.component';
import { P1Component } from './p1/p1.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NewProComponent } from './new-pro/new-pro.component';
import { RegsitrationComponent } from './regsitration/regsitration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    P1Component,
    NewProComponent,
    RegsitrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
