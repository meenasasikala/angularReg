import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { Signup2Component } from './signup2/signup2.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { Forgetpage2Component } from './forgetpage2/forgetpage2.component';
import { ResetComponent } from './reset/reset.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { TableComponent } from './table/table.component';
import { UploadingComponent } from './uploading/uploading.component';

const routes: Routes = [
  {
    path: "signup",
    redirectTo: "signup",
    pathMatch: "full"
  },
  {
    path : "signup",
    component : SignupComponent,
  },
  {
    path:"signup2",
    component:Signup2Component
  },
  {
    path:"register",
    component:RegisterComponent
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"forget",
    component:ForgetpageComponent
  },
  {
    path:"forget2",
    component:Forgetpage2Component
  },
  {
    path:"reset",
    component:ResetComponent
  },
  {
  path:"product",
  component:AddproductComponent
  },
 {
    path:"table",
    component:TableComponent
  },
  {
  path:"upload",
  component:UploadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
