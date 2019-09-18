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

  updateList(listNum){
    console.log(listNum)
  }

  deleteList(listNum){
    if (this.listsForHtml.length == 1)
      this.listsForHtml.splice(0,1)
    else
      this.listsForHtml.splice(listNum-1,1)
  }
  

  deletePassword(){
    this.user.deletePassword
  }
}
