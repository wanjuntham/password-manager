import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loggingIn = false
  loginError : string
  submitted = false
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  })

  constructor(private router: Router,
              private auth: AuthenticationService) {
                if (this.auth.currentUserValue){
                  this.router.navigate(['/'])
                }
              }

  ngOnInit() {
  }

  get credential(){
    return this.loginForm.controls
  }

  onSubmit(){
    this.submitted = true

    if (this.loginForm.invalid){
      return
    }

    this.loggingIn = true
    this.auth.login(this.credential.username.value,this.credential.password.value)
    .subscribe(response => {
      this.router.navigate(['/'])
    },
    error => {
      debugger
      this.loginError = "error"
      this.loggingIn = false
      
    })
    
    
    
    
    
  }
}