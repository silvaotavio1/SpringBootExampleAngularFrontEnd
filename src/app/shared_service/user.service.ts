import { Injectable } from '@angular/core';
import { User } from '../user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user:User;
  private baseUrl:string='http://localhost:8080/api';
  private headers = new Headers({'Content-Type':'application/json'})
  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(this.baseUrl+'/users');
  }

  getUser(id:Number){
    return this.http.get(this.baseUrl+'/user/'+id);
  }

  deleteUser(id:Number){
    return this.http.delete(this.baseUrl+'/user/'+id);
  }

  createUser(user:User){
    return this.http.post(this.baseUrl+'/user', user, {headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
      ;
  }

  updateUser(user:User){
    return this.http.put(this.baseUrl+'/user', user, {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    })
     ;
  }

  setter(user:User){
    this.user = user;
  }

  getter(){
    return this.user;
  }

}
