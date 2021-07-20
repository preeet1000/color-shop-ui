import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterationComponent } from './registeration.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: RegisterationComponent }
];

@NgModule({
  declarations: [
    RegisterationComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class RegisterationModule { }
