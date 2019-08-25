import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserpassComponent } from './userpass/userpass.component';
import { PassdetailComponent } from './passdetail/passdetail.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { NewpassComponent } from './newpass/newpass.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserpassComponent,
    PassdetailComponent,
    HomepageComponent,
    SignupComponent,
    NewpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
