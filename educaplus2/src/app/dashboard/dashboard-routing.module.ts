import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';


const routes: Routes = [
  {path:"",redirectTo:"page-home",pathMatch:"full"},
{path:"page-home",component:PageHomeComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
