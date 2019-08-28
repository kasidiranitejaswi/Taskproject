import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  angForm: FormGroup;
  submitted = false;
  // orderForm: FormGroup;
  phone: FormArray;
  address: FormArray;
  district: FormArray;
  state: FormArray;
  params = {

  }

  constructor(private fb: FormBuilder, private fb1: FormBuilder, private fb2: FormBuilder, private formBuilder: FormBuilder, private router: Router, private usersService: UsersService) {
      this.createForm();
  }

  ngOnInit() {
      this.angForm = this.formBuilder.group({

          name: ['', Validators.required],

          email: ['', [Validators.required, Validators.email]],

          phone: this.formBuilder.array([this.createNumber()]),

          address: this.fb.array([this.createItem()]),
        //   district: this.fb1.array([this.createItem()]),
        //   state: this.fb2.array([this.createItem()])
      });
    //   console.log(this.angForm)
    //   this.getData()
  };
 
  addItem() {
      this.phone = this.angForm.get('phone') as FormArray;
      this.phone.push(this.createNumber());
    //   console.log(this.phone);

      this.address = this.angForm.get('address') as FormArray;
      this.address.push(this.createItem());
    //   console.log(this.address);

      this.district = this.angForm.get('district') as FormArray;
      this.district.push(this.createItem());
    //   console.log(this.district);

      this.state = this.angForm.get('state') as FormArray;
      this.state.push(this.createItem());
    //   console.log(this.state)
  }

  createNumber(): FormGroup {
      return this.formBuilder.group({
          phone: ''
      })
  };

  createItem(): FormGroup {
      return this.fb.group({
          address: '',
          district: '',
          state: '',
      })
  };

  get f() {
      return this.angForm.controls;
  }

  createForm() {
      this.angForm = this.fb.group({
          name: ['', Validators.required],
          address: ['', Validators.required]
      });
  }

  onSubmit() {
    // localStorage.setItem('name', this.angForm.get('name').value);
    // localStorage.setItem('email', this.angForm.get('email').value);
    // localStorage.setItem('phone', this.angForm.get('phone').value[0].phone);
    // localStorage.setItem('address', this.angForm.get('address').value[0].address);
    this.submitted = true;
    // console.log(this.angForm);
    if (this.angForm.valid) {
        // return;
        console.log(this.angForm.value);
        this.router.navigate(['/filt'])
    }
}

  onReset() {
      this.submitted = false;
      this.angForm.reset();
  }

//   getData() {
//       // console.log('hi');
//       //  localStorage.setItem('email', this.angForm.get("email").value);
//       this.usersService.getData(this.params)
//           .subscribe((res) => {
//               // localStorage.setItem('phone', this.angForm.get('phone').value);
//             //   console.log(res);
//           })
//   }
}