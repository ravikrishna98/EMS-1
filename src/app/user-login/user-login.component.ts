import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
import { DataparsingService } from '../dataparsing.service';

import { MainHomeComponent } from '../main-home/main-home.component';
import { UserHomepageComponent } from '../user-homepage/user-homepage.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  mainHide=true;
  userHide=true;


  form: FormGroup =new FormGroup({
  });
  
  constructor( private formBuilder: FormBuilder, private mainHomeComponent:MainHomeComponent ) { 
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

    
  onClick(){
    this.mainHomeComponent.callFromLogIn();
  }

}
