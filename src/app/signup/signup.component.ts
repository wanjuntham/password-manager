import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { MasterUserService } from '../master-user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  submitted = false
  signingUp = false
  
  signupForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required)
  })
  constructor(private auth: AuthenticationService,
              private router: Router,
              private masterUser: MasterUserService) {
                if (this.auth.currentUserValue){
                  this.router.navigate(['/'])
                }
               }

  ngOnInit() {
  }

  get credential(){
    return this.signupForm.controls
  }

  onSubmit(){
    this.submitted = true

    if (this.signupForm.invalid && !this.credential.password.value.equals(this.credential.password2.value)){
      return
    }

    this.signingUp = true
    
    this.masterUser.register(this.signupForm.value)
    .subscribe(response => {
      console.log("registration successful")
      this.router.navigate(['/login'])
    },
    error => {
      this.signingUp = false
    })
  }

}
