import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import{ environment} from '../../environments/environment'

const url = environment.appURL

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  ApiUrl = url + 'userMgmt/users/'
  constructor(private httpClient: HttpClient) { }

  signup(data){
    return this.httpClient.post(this.ApiUrl + 'register', data)
  }

  login(data){
    return this.httpClient.post(this.ApiUrl + 'login', data)
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

}


