import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  interpolation = 'Interpolation';
  demo = "Demo"
  typeOfEvent = ""
  byDefaultWritten = "Default";
  greeting = ""
  searchList = "Search Here";
  searched = "";
  buttonNumber = "";
  values = "";
  value: string[] = ["value1", "value2"];

  aboutClick(event) {
    console.log(event)
    this.typeOfEvent = event.type;

  }

  onClick() {
    console.log("Event Binding in Angular")
    this.greeting = "Event Binding in Angular"

  }
  variousInput(value) {
    console.log(value);
    this.searched = value;

  }
  buttonClicked(event) {
    this.buttonNumber = event.target.value;

  }
  onButtonMouseOver() {
    console.log("Mouse Hovered right Now");
    alert('Mouse Over');
  }
  onKey(event) {
    this.values = event.target.value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
