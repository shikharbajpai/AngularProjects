import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register.model';

const url = environment.appURL

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  ApiUrl = url;
  registerUser(user: RegisterModel) {
    return this.http.post(this.ApiUrl + 'users/register', user);
  }

  authenticateUser(user: LoginModel) {
    return this.http.post(this.ApiUrl + 'users/login', user);
  }
}
