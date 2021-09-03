import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'
import { AuthenticationService } from '../authentication.service'
import { Router} from '@angular/router'

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {
  signupForm = new FormGroup({
    username : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),

  });


  constructor( private authenticationService : AuthenticationService, public router : Router) { }
 
  ngOnInit(): void {
  }

    

signup(){
  if(this.signupForm.valid){
    this.authenticationService.signup(this.signupForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', (res as any).token);
        if((res as any).token != null) {
          this.router.navigate(['/login'])
        }
      }, err =>{
        if(err) throw err;

      }
    )
  }
}

 

}
