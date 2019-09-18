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
    // below code is to test date month year are parsed and displayed correctly
    // let submittedDate = this.parseDate(this.newPasswordForm.controls.date.value)
    // let day = submittedDate.getDate()
    // let month = submittedDate.getMonth() + 1
    // let year = submittedDate.getFullYear()
    // console.log(`${day} + ${month} + ${year}`)
    
  }

  // parseDate function is to parse html input date to allow use of js date function
  // parseDate(date){
  //   let b = date.split(/\D/)
  //   return new Date(b[0], --b[1],b[2])
  // } 
}
