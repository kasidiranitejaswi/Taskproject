import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;
    orderForm: FormGroup;
    Phnumber: FormArray;
    Address: FormArray;
    params={
      
    }
  
  constructor(private fb: FormBuilder, private formBuilder: FormBuilder,private router : Router,private usersService: UsersService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
            
      Name: ['', Validators.required],
      
      email: ['', [Validators.required, Validators.email]],

      // Phnumber: this.formBuilder.array([this.createNumber()]),

      Address: this.formBuilder.array([this.createItem()]) 
  });
   console.log(this.registerForm)
   this.getData()
  }

addItem()  {
  // this.Phnumber = this.registerForm.get('Phnumber') as FormArray;
  // this.Phnumber.push(this.createNumber());
  // console.log(this.Phnumber);
    this.Address = this.registerForm.get('Address') as FormArray;
    this.Address.push(this.createItem());
    console.log(this.Address)
  } 

  // createNumber():FormGroup {
  //   return this.formBuilder.group({
  //     Phnumber: '',
     
  //   })
      
  // }; 

createItem():FormGroup {
    return this.formBuilder.group({
     
      Address: ''
    })
      
  };




get f() { return this.registerForm.controls; }

onSubmit() {
    this.submitted = true;
    console.log(this.registerForm);

    if (this.registerForm.valid) {
    //return;
    console.log(this.registerForm.value);
    this.router.navigate(['/filt'])
    // this.router.navigate(['/users'])
    // this.usersService.sendingData(this.registerForm)
    // .subscribe((response)=>{
    //   console.log();
      
    // })
    }
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}

onReset() {
    this.submitted = false;
    this.registerForm.reset();
}

getData(){
  // console.log('hi');
  this.usersService.getData(this.params)
  .subscribe((res)=>{
   console.log(res);
    
  })
}



}
