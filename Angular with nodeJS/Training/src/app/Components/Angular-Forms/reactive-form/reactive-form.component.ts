import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilder, Validators, FormArray } from '@angular/forms'
import { PasswordValidator } from './Shared/password.validator';
import { forbiddenNameValidator } from './Shared/user-name.validator';
import { EnrollmentService } from './enrollment.service'


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  registrationForm: FormGroup;

  // get userName(){
  //   return this.registrationForm.get('userName');
  // }
  // get email(){
  //   return this.registrationForm.get('email');
  // }

  get addressGroup(): FormGroup {
    return this.registrationForm.get('address') as FormGroup;
  }

  get alternateEmails() {
    return this.registrationForm.get('alternateEmails') as FormArray;
  }

  addAlternativeEmail() {
    this.alternateEmails.push(this.fb.control(''))
  }
  errorMsg = '';

  constructor(private fb: FormBuilder, private _enrollmentService: EnrollmentService) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      userName: ['',
        [Validators.required, Validators.minLength(3), forbiddenNameValidator(/password/)]],
      email: [''],
      subscribe: [false],
      password: [''],
      confirmPassword: [''],
      address: this.fb.group({
        city: ['', [Validators.required]],
        state: [''],
        postalCode: ['']
      }),
      alternateEmails: this.fb.array([])
    }, { validator: PasswordValidator });

    // this.registrationForm.get('subscribe').valueChanges
    //   .subscribe(checkedValue => {
    //     const email = this.registrationForm.get('email');
    //     if (checkedValue) {
    //       email.setValidators(Validators.required)
    //     }
    //     else {
    //       email.clearValidators();
    //     }
    //     email.updateValueAndValidity();
    //   })
  }

  // registrationForm = new FormGroup({
  //   userName : new FormControl('Shikhar'),
  //   password : new FormControl(''),
  //   confirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // });

  loadApiData() {
    // this.registrationForm.setValue({
    //   userName : 'Amit',
    //   password : 'abcd',
    //   confirmPassword : 'abcd',
    //   address : {
    //     city : 'Jaipur',
    //     state : 'Rajasthan',
    //     postalCode : '265001'
    //   }

    // })
    this.registrationForm.patchValue({
      userName: 'Amit',
      password: 'abcd',
      confirmPassword: 'abcd'


    })
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    // this._enrollmentService.enroll(this.registrationForm.value)
    // .subscribe(
    //   response => console.log('Success!', response),
    //   // error => console.log('Error!', error)
    //   error => this.errorMsg = error.statusText
    // )
  }

}
