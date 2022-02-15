import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { MyprojectComponent } from './myproject/myproject.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';

const routes: Routes = [
  {
    path: 'user/login',
    component:UserLoginComponent
  },
  {
    path: 'admin/login',
    component:AdminLoginComponent
  },
  {
    path: 'user/reg',
    component:UserRegComponent
  },
  {
    path: 'user/home',
    component:UserHomepageComponent
  },
  {
    path: 'user/main-home',
    component:MainHomeComponent
  },
  {
    path: 'myprofile',
    component:MyprofileComponent
  },
  {
    path: 'myproject',
    component:MyprojectComponent
  },
  {
    path: 'applyleave',
    component:ApplyleaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
