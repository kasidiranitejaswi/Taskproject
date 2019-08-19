import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  userdata={
  
    Fname:'',
    Lname:'',
    email:'',
    phonenumber:'',
    conpassword:'',
    password:''
  }

  constructor(private registerservice:RegisterService,  private route : Router) { }

  ngOnInit() {
  }
  signUp(){
    this.registerservice.signup(this.userdata)
    .subscribe(
      (response)=> {
        console.log(response)
      }
   )
   this.route.navigate(['/filt']);
   //this.route.navigate(['/Login']);
  }
  
//  onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//    // This is null if the 'email' scope is not present.
//   }
}
