import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  displayHeading1 = true;
  displayHeading2 = false;
  color = "red";
  courses = ['B.Tech','B.C.A.','B.Com','B.E','M.B.A','M.Tech'];


  constructor() { }

  ngOnInit(): void {
  }

}
