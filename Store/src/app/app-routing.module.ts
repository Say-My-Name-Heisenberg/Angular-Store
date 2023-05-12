import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProComponent } from './pro/pro.component';
import { P1Component } from './p1/p1.component';

const routes: Routes = [
  {path:'',component:ProComponent},
  {path:'ViewMore',component:P1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
