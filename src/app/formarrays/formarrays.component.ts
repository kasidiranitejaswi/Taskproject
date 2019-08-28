import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-formarrays',
  templateUrl: './formarrays.component.html',
  styleUrls: ['./formarrays.component.css']
})
export class FormarraysComponent implements OnInit {
  public isValid: boolean = false;


  registerForm: FormGroup;
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber: ['', [Validators.required, Validators.minLength(10)]],
      secondaryEmail: this.formBuilder.array([
        this.addEmailFormGroup()
      ])

    });

    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$")]],
      password: ['', [Validators.required, Validators.minLength(8),
      Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*#?&])[a-zA-Z0-9@$!%#?&]+$")]],
      mobile: ['', [Validators.required, Validators.minLength(10)]],
      secondaryMail: this.formBuilder.array([
        this.addMailSignUpFormGroup()
      ])
    });
  }

  addEmail(): void {
    (<FormArray>this.registerForm.get('secondaryEmail')).push(this.addEmailFormGroup());
    console.log(this.registerForm.controls.secondaryEmail.value)
  }
  delEmail(index: number) {
    (<FormArray>this.registerForm.get('secondaryEmail')).removeAt(index); // to delete the elements from an array
  }

  addEmailFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required,]]
    })
  }

  addMailSignUpFormGroup(): FormGroup {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9_.+-]+@[a-z0-9-]+.[a-z0-9-.]+$")]]
    })
  }
  addSignUpEmail(): void {
    (<FormArray>this.signUpForm.get('secondaryMail')).push(this.addMailSignUpFormGroup());
    console.log(this.signUpForm.controls.secondaryMail.value)
  }
  delSignUpEmail(index: number) {
    (<FormArray>this.signUpForm.get('secondaryMail')).removeAt(index); // to delete the elements from an array
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  submit() {
    this.isValid = true;
    console.log("formResult", this.registerForm.value);
    localStorage.setItem('firstName', this.registerForm.get('firstName').value);
    localStorage.setItem('lastName', this.registerForm.get('lastName').value);
    localStorage.setItem('email', this.registerForm.get('email').value);
    localStorage.setItem('password', this.registerForm.get('password').value);
    localStorage.setItem('mobileNumber', this.registerForm.get('mobileNumber').value);
    localStorage.setItem('secondaryEmail', this.registerForm.get('secondaryEmail').value[0].email);
  }

  getErrorMessage() {

    return this.registerForm.get('email').hasError('required') ? 'Please fill this field' :
      this.registerForm.get('email').hasError('pattern') ? 'Please enter valid mail' :
        '';
  }

  getErrorMessage1() {
    return this.signUpForm.get('name').hasError('required') ? 'You must enter a value' :
      this.signUpForm.get('name').hasError('maxlength') ? 'Username cannot be more than 30 characters long' :
        '';
  } 

  getErrorMessage2() {
    return this.signUpForm.get('email').hasError('required') ? 'You must enter a value' :
      this.signUpForm.get('email').hasError('pattern') ? 'Not a valid mail' :
        '';
  } 

  getErrorMessage3() {
    return this.signUpForm.get('password').hasError('required') ? 'You must enter a value' :
      this.signUpForm.get('password').hasError('minlength') ? 'Password must be more than 8 characters' :
        this.signUpForm.get('password').hasError('pattern') ? 'Password must be uppercase, lowercase and at least one number, and at least one special character' :
          '';
  }

  getErrorMessageLastName() {
    return this.signUpForm.get('lastName').hasError('required') ? 'You must enter a value' :
      '';
  }
  getErrorMessageMobile() {
    return this.signUpForm.get('mobile').hasError('required') ? 'You must enter a value' :
      '';
  }
  getErrorMessageSecondaryMail() {
    // console.log(this.signUpForm.get('secondaryMail').value)
    //   *ngIf="myForm.controls['company_address2'].errors?.required &&
    // myForm.controls['company_address2'].touched

    // return this.signUpForm.get('secondaryMail').controls['email'].hasError('required') ? 'You must enter a value' :
    //   this.signUpForm.get('secondaryMail').get('email').hasError('pattern') ? 'Not a valid email' :
    //     '';
  }

  signup(): void {
    console.log('mat form', this.signUpForm.value);
    localStorage.setItem('name', this.signUpForm.get('name').value);
    localStorage.setItem('lastName', this.signUpForm.get('lastName').value);
    localStorage.setItem('email', this.signUpForm.get('email').value);
    localStorage.setItem('password', this.signUpForm.get('password').value);
    localStorage.setItem('mobile', this.signUpForm.get('mobile').value);
    localStorage.setItem('secondaryMail', this.signUpForm.get('secondaryMail').value[0].email);
  }

}
