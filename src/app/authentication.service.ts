import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MasterUser } from './master-user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: Observable<MasterUser>
  private currentUserSubject: BehaviorSubject<MasterUser>
  constructor(private http: HttpClient) { 
    this.currentUserSubject = new BehaviorSubject<MasterUser>
      (JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  login(username,password){
    //return this.http.post('URL',{username,password})
    //.pipe(map(user=> {
    //   localStorage.setItem('currentUser',JSON.stringify(user))
    //   this.currentUserSubject.next(user)
    //   return user
    // }))
  }
  

  logout(){
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }
}
