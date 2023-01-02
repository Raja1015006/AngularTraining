import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegStepperComponent } from './reg-stepper/reg-stepper.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  
 {
  path:'login',
  component:LoginComponent

 },
 {
  path:'register',
  component:RegisterComponent

 },
 {
  path:'dashboard',
  component:DashboardComponent

 },
 {
  path:'reg',
  component:RegStepperComponent

 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
