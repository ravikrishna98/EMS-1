import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  constructor() { }
  userHomepageComponentHide = false;

  ngOnInit(): void {
  }
  
  callFromLogIn(){
    this.userHomepageComponentHide=true;
    console.log("user home");
    
  }

}
