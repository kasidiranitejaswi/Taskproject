import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http'
import { CanActivate, Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // private registerUrl = "http://localhost:4200/api/register";
  // private loginUrl = "http://localhost:4200/api/login";

  constructor(private router:Router) { }
  canActivate (){
    if(localStorage.getItem('token')){
        return true;
    }else{
        this.router.navigate(['/auth']);
        return false;
    }
  }

}
