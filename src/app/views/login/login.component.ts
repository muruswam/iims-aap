import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { User } from './field.interface';

@Component({
  selector: 'app-login123',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
public loginForm: FormGroup;


 constructor(public router: Router,
             public activatedRoute: ActivatedRoute,
             private fb: FormBuilder) { }

  ngOnInit(){
    this.loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
    'password': new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(12)])
  })
  }

  validate(model: User): void {
   console.log("clicked on login button" + model.username);

   if(model.username === 'murugan' && model.password === 'murugan'){
     this.router.navigate(['./home']);   
   }


 }
 }
