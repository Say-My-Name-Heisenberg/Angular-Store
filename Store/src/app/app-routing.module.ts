import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProComponent } from './pro/pro.component';
import { P1Component } from './p1/p1.component';
import { NewProComponent } from './new-pro/new-pro.component';
import { RegsitrationComponent } from './regsitration/regsitration.component';

const routes: Routes = [
  {path:'',component:ProComponent},
  {path:'ViewMore/:id',component:P1Component},
  {path:'addpro',component:NewProComponent},
  {path:'reg',component:RegsitrationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
