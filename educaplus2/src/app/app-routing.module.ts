import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './dashboard/page-home/page-home.component';

const routes: Routes = [

  { path:'', loadChildren:()=>import('./authentification/authentification.module').then((m)=>m.AuthentificationModule)},
  { path:'dashboard', loadChildren:()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)},
  { path: 'page-home', component: PageHomeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
