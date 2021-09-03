import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  title = "Pipes";
  defination = "Defination : Pipes in angular pipes allow us to transform data before displaying them in the view.";
  example =  "Happy new year";
  person = {"firstName" : "Shikhar",
            "lastName" : "Bajpai"
           }
public date = new Date();  //Create a new property

  constructor() { }

  ngOnInit(): void {
  }

}
