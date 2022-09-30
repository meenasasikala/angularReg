import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {ButtonModule} from 'primeng/button';
import { Signup2Component } from './signup2/signup2.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {InputTextModule} from 'primeng/inputtext'

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Signup2Component,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    InputTextModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
