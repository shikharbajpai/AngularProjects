import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl(),
    password : new FormControl(),

  });

  constructor(public router : Router, private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
  }

  login(){
    // this.router.navigate(['/section'])
    if(this.loginForm.valid){
      this.authenticationService.login(this.loginForm.value).subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', (res as any).userData.token);
          if((res as any).userData.token != null) {
            this.router.navigate(['/section'])
          }
        }, err =>{
          if(err) throw err;
  
        }
      )
    }
  }
  
   
  
  }