import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  loginUrl="http://localhost:8080/login";

  login(data:User)
  {
    return this.http.post(this.loginUrl,data);
  }
}
