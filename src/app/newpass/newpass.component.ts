import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.css']
})
export class NewpassComponent implements OnInit {

  newPasswordForm = new FormGroup({
    appName: new FormControl('',Validators.required),
    username: new FormControl('',),
    password: new FormControl('',Validators.required),
    password2: new FormControl('',Validators.required),
    date: new FormControl('',[Validators.required])
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    let testtest: string
    testtest = this.newPasswordForm.controls.date.value
    console.log(testtest)
  }
}
