import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginSuccess = false
  loginError = "Login failed, please try again"
  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.minLength(6),Validators.required]),
  })

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.loginForm.valid){
      // this.http.post
      this.loginSuccess = true
    } else {
      this.loginSuccess = false
    }
  }
}