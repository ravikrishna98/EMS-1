import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegComponent } from './user-reg/user-reg.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    UserLoginComponent,
    UserRegComponent,
    UserHomepageComponent,
    MainHomeComponent,
    MyprofileComponent,
    MyprojectComponent,
    ApplyleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
