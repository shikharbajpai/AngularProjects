import { Component, OnInit } from '@angular/core';
import { DialogComponent } from '../Components/dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText = ''

  

  constructor(public dialog: MatDialog, private router : Router) { }

  ngOnInit(): void {
  }

  onClick(value){
    console.log("Search Text is : " + value);
    alert('User Searched For : '+ value);
    

  }

  openDialog(){
    let dialogRef = this.dialog.open(DialogComponent, {
      height: '700px',
      width: '600px',
    });
    
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
