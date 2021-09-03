import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ stateJson } from '../shared/state';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  profileForm: FormGroup;
  // states : any = ['Uttar Pradesh', 'Maharastra', 'Madhya Pradesh', 'Bihar']
  classes: any = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];

  stateData = [];
  states = [];
  stateList: string[] = [];

  city = [];



  constructor( public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.reactiveForm();
    this.stateData = stateJson;
    this.stateData.forEach(element =>{
      this.states.push( element.states)
    });
    this.states[0].forEach(ele =>{
      this.stateList.push(ele.state)
    })
  }
   


  reactiveForm() {
    this.profileForm = this.formBuilder.group({
      firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]+')]],
      middleName: ["", [Validators.pattern('[a-zA-Z]+')]],
      lastName: ["", [Validators.required, Validators.minLength(3) ,Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]+')]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, Validators.minLength(10) ,Validators.maxLength(10),
      Validators.pattern("/^[0-9]{10,10}$/")]],
      dateOfBirth: ["", [Validators.required]],
      address: ["", [Validators.required]],
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      zip: ["", [Validators.required, Validators.minLength(6) ,Validators.maxLength(6), 
        Validators.pattern("/^[0-9]{10,10}$/")]],
      gender: ["", [Validators.required]],
      role: ["", [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      qualification: [''],
      interested: ['Yes'],
     
    })

  }

  pushCities(selectedState){
    this.city = [];
    const str = selectedState;
    // console.log(str)
    // console.log(this.states[0])
    this.states[0].forEach(ele =>{
      if(ele.state === str){
        // console.log(ele.state)
        // console.log(ele.districts)
        ele.districts.forEach(e =>{
         
          this.city.push(e)
        })
        return;
      }
    })
  }



}
