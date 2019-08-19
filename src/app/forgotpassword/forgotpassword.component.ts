import { Component, OnInit } from '@angular/core';
//import {NgForm,FormControl,FormsModule} from '@angular/forms';
import {RegisterService} from '../register.service'

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
public data:any;
  constructor(private registerservice:RegisterService) { }

  ngOnInit() {
  }
  userdata = {
    email:'',
  }
  resetpassword(){
    this.registerservice.password(this.userdata)
  
    .subscribe(
      (response)=> {
        console.log(response)
        this.data=response;
        if(this.data.status){
          alert(this.data.message);
       
        }
        else{
          alert(this.data.message);
        }
      }
    )
  }
}
