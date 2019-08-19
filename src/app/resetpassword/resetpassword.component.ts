import { Component, OnInit } from '@angular/core';
import {NgForm,FormControl,FormsModule} from '@angular/forms';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  public id:any;
  public password:any;
  
constructor(private route : Router, private registerservice:RegisterService, private router:ActivatedRoute) { }
 
public data : any;

  ngOnInit() {
    this.router.params.subscribe((params)=>{
    
      this.id = params['id'];
     
      console.log(this.id);
    })
  }
  userdata = {
    password:'',
    confirmpassword:'',
    
   }

resetpassword()
{
  if(this.userdata.password == this.userdata.confirmpassword){
  this.registerservice.resetpassword(this.userdata,this.id)
  .subscribe(
    (response)=> {
      console.log(response);
      this.data=response;
      if(this.data.status){
        alert(this.data.message);
        this.route.navigate(['/Login']);
      }
      else{
        alert(this.data.message);
      }
    }
  )
 
  }
  else{
  alert("password must be same")
}
}
}
