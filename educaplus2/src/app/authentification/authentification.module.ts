import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';
import { LoginnumberComponent } from './loginnumber/loginnumber.component';



@NgModule({
  declarations: [
    PageAcceuilComponent,
    LoginComponent,
    SignUpComponent,
    LoginnumberComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule,

  ]
})
export class AuthentificationModule { }
