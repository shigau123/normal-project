import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    uemail:new FormControl("",[Validators.required,Validators.minLength(8), Validators.pattern('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')]),
    upass:new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
  })

  get uemail(){
    return this.loginForm.get('uemail')
  }
   
  get upass(){
    return this.loginForm.get('upass')
  }

  login(){
    console.log(this.loginForm.value);
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
