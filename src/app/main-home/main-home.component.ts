import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {

  constructor() { }

  mainHomeComponentHide = false;
  ngOnInit(): void {

  }

  callFromLogIn(){
    this.mainHomeComponentHide=true;
    console.log("main home");
    
  }

}
