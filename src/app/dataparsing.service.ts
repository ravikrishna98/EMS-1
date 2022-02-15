import { Injectable } from '@angular/core';
import { MainHomeComponent } from './main-home/main-home.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataparsingService {

  constructor(private mainHomeComponent:MainHomeComponent) { }
  
  
  callFromLogIn(){
this.mainHomeComponent.callFromLogIn();
// this.userHomepageComponent.callFromLogIn();

}
}
