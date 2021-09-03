import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  example =  "Happy new year";
  playerArr = [
    'Virat',
    'Rohit',
    'Shikhar Dhawan',
    'Mahendra Singh Dhoni'
  ]
  skillArr = [
    {sno : 1,
      name : "Amit",
      skill : "Angular",
      experience : "Beginner"
    },
    {sno : 2,
      name : "Sumit",
      skill : "Vue",
      experience : "Intermediate"
    },
    {sno : 3,
      name : "Rakesh",
      skill : "ReactJS",
      experience : "Beginner"
    },
    {sno : 4,
      name : "Gaurav",
      skill : "Java",
      experience : "Expert"
    },
  ]
  searchHere ='';
  constructor() { }

  ngOnInit(): void {
  }

}
