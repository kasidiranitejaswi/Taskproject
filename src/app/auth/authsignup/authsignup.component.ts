import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-authsignup',
  templateUrl: './authsignup.component.html',
  styleUrls: ['./authsignup.component.css']
})
export class AuthsignupComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  name: FormArray;
  firstname: FormArray;
  lastname: FormArray;
  mobile: FormArray;
  countrycode: FormArray;
  phnumber: FormArray;
  params = {

  }

  constructor(private fb: FormBuilder, private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) {
     this.createForm();
   }

  ngOnInit() {
    this.angForm = this.formBuilder.group({
     
      name: this.formBuilder.array([this.createName()]),
      
      email: ['', [Validators.required, Validators.email]],

      mobile: this.fb.array([this.createNumber()]),
      
      password: ['', [Validators.required, Validators.minLength(6)]]

  });
  }
  addItem() {
    this.firstname = this.angForm.get('firstname') as FormArray;
    this.firstname.push(this.createName());


    this.lastname = this.angForm.get('lastname') as FormArray;
    this.lastname.push(this.createName());


    this.countrycode = this.angForm.get('countrycode') as FormArray;
    this.countrycode.push(this.createNumber());
 

    this.phnumber = this.angForm.get('phnumber') as FormArray;
    this.phnumber.push(this.createNumber());
}

createName(): FormGroup {
  return this.formBuilder.group({
    firstname: '',
    lastname:'',
  })
};

createNumber(): FormGroup {
  return this.fb.group({
    countrycode: '',
    phnumber: '',
  })
};

get f() {
  return this.angForm.controls;
}

 createForm() {
  this.angForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required]
  });
}


onSignup() {
  if (this.angForm.valid) {
    console.log(this.angForm.value);
    this.router.navigate(['/filt'])
}
  localStorage.setItem('firstname', this.angForm.get('name').value[0].firstname);
  localStorage.setItem('lastname', this.angForm.get('name').value[0].lastname);
  localStorage.setItem('email', this.angForm.get('email').value);
  localStorage.setItem('password', this.angForm.get('password').value);
  localStorage.setItem('countrycode', this.angForm.get('mobile').value[0].countrycode);
  localStorage.setItem('phnumber', this.angForm.get('mobile').value[0].phnumber);
  this.submitted = true;

  var postData ={
      "name": {
          "first": this.angForm.get('name').value[0].firstname,
          "last":  this.angForm.get('name').value[0].lastname
      },
      "email": this.angForm.get('email').value,
      "mobile": {
          "countryCode": this.angForm.get('mobile').value[0].countrycode,
          "number": this.angForm.get('mobile').value[0].phnumber
      },
      "password": this.angForm.get('password').value
   
  }
  this.usersService.getData(postData)
  .subscribe((res)=>{
    console.log(res)
  }) 
}

onReset() {
  this.submitted = false;
  this.angForm.reset();
}

}
