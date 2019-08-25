import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupSuccess: boolean
  signupForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.minLength(6),Validators.required]),
    password2: new FormControl('',[Validators.minLength(6),Validators.required])
  })
  constructor(private user: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    if (this.signupForm.valid && 
      this.signupForm.controls.password.value == this.signupForm.controls.password2.value){
        // this.user.signupPost
        this.signupSuccess = true
    } else {
      this.signupSuccess = false
    }
  }

}
