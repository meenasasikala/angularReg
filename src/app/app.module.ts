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
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule,PatternValidator } from '@angular/forms';
import { ForgetpageComponent } from './forgetpage/forgetpage.component';
import { Forgetpage2Component } from './forgetpage2/forgetpage2.component';
import { ResetComponent } from './reset/reset.component';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import { ToastModule } from "primeng/toast";
import { ConfirmationService, MessageService } from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    Signup2Component,
    RegisterComponent,
    LoginComponent,
    ForgetpageComponent,
    Forgetpage2Component,
    ResetComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmPopupModule,
    BrowserModule,
    ToastModule
  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
