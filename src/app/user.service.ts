import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseUrl = environment.baseUrl

  sampleList = new BehaviorSubject([
    {
      id: 1,
      applicationName: "test",
      username:"test",
      password:"test",
      expireDate:"20-20-20",
      daysToExpiry: 10
    },
    {
      id: 2,
      applicationName: "test2",
      username:"test2",
      password:"test2",
      expireDate:"20-20-20",
      daysToExpiry: 10
    },
  ])

  passwordList = new BehaviorSubject([])

  constructor(private http:HttpClient) { 
    // this.http.get(baseUrl).subscribe((lists:any) => {
    //   this.passwordList.next(lists)
    // })
    this.passwordList.next(this.sampleList.getValue())
  }

  deletePassword(row:number){
    // this.http.delete(baseUrl,)
  }


  getPassword(row:number){
    let tempList = this.sampleList.getValue()[row]
    return tempList.password
  }

  getApplicationName(row:number){
    let tempList = this.sampleList.getValue()[row]
    return tempList.applicationName
  }

  getUsername(row:number){
    let tempList = this.sampleList.getValue()[row]
    return tempList.username
  }

  getExpireDate(row:number){
    let tempList = this.sampleList.getValue()[row]
    return tempList.expireDate
  }

  getDaysToExpiry(row:number){
    let tempList = this.sampleList.getValue()[row]
    return tempList.daysToExpiry
  }

  
  

}
