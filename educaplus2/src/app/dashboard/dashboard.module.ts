import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Ajoutez cette ligne
import { PageHomeComponent } from './page-home/page-home.component';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule // Ajoutez cette ligne
  ]
})
export class DashboardModule { }
