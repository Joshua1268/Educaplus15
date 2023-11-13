import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginnumberComponent } from './loginnumber/loginnumber.component';




const routes: Routes = [
  { path: '', redirectTo: 'page-acceuil', pathMatch: 'full' },
  { path: 'page-acceuil', component: PageAcceuilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent},
  { path: 'loginnumber', component: LoginnumberComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }