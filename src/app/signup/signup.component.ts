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
    // this.registerservice.signup(this.userdata)
    localStorage.setItem('Fname', this.userdata.Fname);
    localStorage.setItem('Lname', this.userdata.Lname);
    localStorage.setItem('email', this.userdata.email);
    localStorage.setItem('phonenumber', this.userdata.phonenumber);
    localStorage.setItem('password', this.userdata.password);
  //   .subscribe(
  //     (response)=> {
  //       localStorage.setItem('Fname', 'userdata.Fname');
  //       console.log(response)
  //     }
  //  )
   this.route.navigate(['/filt']); 
   //this.route.navigate(['/Login']);
  }
  
//  onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//    // This is null if the 'email' scope is not present.
//   }
}
