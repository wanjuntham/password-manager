import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MasterUser } from './master-user';

@Injectable({
  providedIn: 'root'
})
export class MasterUserService {

  constructor(private http:HttpClient) { }

  getMasterUser(){
    // return this.http.get<MasterUser[]>('api')
  }

  register(user){
    // return this.http.post('apiregister',user)
  }

  delete
}
