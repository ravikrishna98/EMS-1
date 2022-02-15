import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  form: FormGroup =new FormGroup({
      
  });
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:['',Validators.required],
      doj:[',Validators.required'],
      password: ['', Validators.required],

  });
  }

  onSubmit(){

    console.log(this.form.value);
    
  }

}
