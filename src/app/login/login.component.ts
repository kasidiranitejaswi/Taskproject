import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userResponse:any;
  logindata={
  email:'',
  password:''
}
  constructor(private registerservice:RegisterService) { }

  ngOnInit() {
  }
  Login(){
    this.registerservice.login(this.logindata)
    .subscribe(
      (response)=> {
        console.log(response)
        this.userResponse=response;
        localStorage.setItem('id',this.userResponse.addDetails._id);
      }
    )
  }
}
