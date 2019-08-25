import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {List} from '../list'
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-userpass',
  templateUrl: './userpass.component.html',
  styleUrls: ['./userpass.component.css']
})



export class UserpassComponent implements OnInit {


  lists = new BehaviorSubject([])
  listsForHtml = []

  constructor(private user: UserService) { }

  ngOnInit() {
    this.lists.next(this.user.passwordList.getValue())
    for (let row of this.lists.getValue()) {
      this.listsForHtml.push(row)
    }
  }


  

  deletePassword(){
    this.user.deletePassword
  }
}
