import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import{ AuthenticationService} from './authentication.service';
import { HttpClientModule } from '@angular/common/http';



import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './login-page/login-page.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';


const routes: Routes = [
  {path:'', component: LoginPageComponent},
  {path:'login', component: LoginPageComponent}, 
  {path:'signup', component: SignUpPageComponent},

];

@NgModule({
  declarations: [

    LoginPageComponent,
    SignUpPageComponent,
  ],
  
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
  
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatRadioModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    
  ],
  providers:[
    AuthenticationService,
  ]
})
export class AuthenticationModule { }

