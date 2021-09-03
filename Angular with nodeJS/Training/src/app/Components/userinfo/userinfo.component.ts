import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  userInfo: FormGroup;
  newSkill : FormArray;

  get initialName(){
      return this.userInfo.get('firstName');
    }

  get midName(){
      return this.userInfo.get('middleName');
    }

  get surName(){
      return this.userInfo.get('lastName');
    }

  get emails(){
      return this.userInfo.get('email');
    }

  get skills(){
      return this.userInfo.get('skill');
    }

  get levels(){
      return this.userInfo.get('level');
    }

  get newSkills() {
      return this.userInfo.get('newSkill') as FormArray;
    }

  get skillNames(){
      return this.newSkill.get('newName') as FormArray;
    }

  get skillLevels(){
      return this.newSkill.get('newLevel') as FormArray;
    }

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.userInfo = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]+')]],
      middleName: ['', [Validators.pattern('[a-zA-Z]+')]],
      lastName: ['', [Validators.required, Validators.minLength(3) ,Validators.maxLength(10),
        Validators.pattern('[a-zA-Z]+')]],
      email: ['', [Validators.required, Validators.email]],
      newSkill: this.formBuilder.array([
        this.includeSkill()
      ])

    })

  }

  includeSkill() {
    return this.formBuilder.group({
      skillName: ['', [Validators.required]],
      skillLevel: ['', [Validators.required]]
    });
  }

   addNewSkill() {
    this.newSkill = this.userInfo.get('newSkill') as FormArray;
    this.newSkill.push(this.includeSkill());
  }

  deleteSkill(i){
    this.newSkill = this.userInfo.get('newSkill') as FormArray;
    this.newSkill.removeAt(i);
  }

  onSubmit() {
    console.log(this.userInfo.value);
  }

}
