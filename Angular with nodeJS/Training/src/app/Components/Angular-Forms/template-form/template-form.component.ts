import { Component, OnInit } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  title = 'Template-Driven-Forms';
  topics = ["Angular", "React", "Vue"];
  topicHasError = true;

  userModel = new User('SKB', 'sb@test.com', 5656665656, 'Street', 'City', 'State', 34567, 'default', '', true);

  validateTopic(value) {
    if (value == "default") {
      this.topicHasError = true;

    }
    else {
      this.topicHasError = false;
    }


  }

  onSubmit() {
    console.log(this.userModel);
  }

  constructor() { }

  ngOnInit(): void {
  }



}
