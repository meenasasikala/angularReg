import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import {ConfirmDialogModule}from 'primeng/confirmdialog';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages'
import {HttpClientModule} from '@angular/common/http';
import { AddproductComponent } from './addproduct/addproduct.component';
import { TableComponent } from './table/table.component';
import {TableModule} from 'primeng/table';
import { PngtableComponent } from './pngtable/pngtable.component';
import { UploadingComponent } from './uploading/uploading.component';
import {FileUploadModule} from 'primeng/fileupload';

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
    AddproductComponent,
    TableComponent,
    PngtableComponent,
    UploadingComponent
    
    
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
    ToastModule,
    ConfirmDialogModule,BrowserAnimationsModule,
    MessagesModule,
    HttpClientModule,
    TableModule,
    FileUploadModule

  ],
  providers: [ConfirmationService,MessageService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
