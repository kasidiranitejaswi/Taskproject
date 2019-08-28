import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.css']
})
export class AuthloginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  username: '';
  password: '';


  constructor(
        private fb: FormBuilder,
        private formBuilder: FormBuilder,
        private router: Router,
        private usersService: UsersService
  ) { 
    this.createForm();
   }

  ngOnInit() {
   
    this.loginForm = this.formBuilder.group({
     
      username: ['', Validators.required],
      password: ['', Validators.required]

  });

  }
  get f() {
    return this.loginForm.controls;
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // localStorage.setItem('username', this.loginForm.get('username').value);
    // localStorage.setItem('password', this.loginForm.get('password').value);

    this.submitted = true;
    if (this.loginForm.valid) {
        // console.log(this.loginForm.value);
        var loginData = {
          email: this.loginForm.value.username,
          password: this.loginForm.value.password
        }
        this.usersService.login(loginData).subscribe((res:any) => {
          console.log("response",res)
          localStorage.setItem('token',res.data.token)
          // alert("logged in successfully")
        this.router.navigate(['/filt'])
        });
    }
  }
}
