import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  signup(signupData){
    return this.http.post<any>("http://localhost:4200/v1/SignUp/signup",signupData);
  }
  login(loginData){
    return this.http.post<any>("http://localhost:4200/v1/Login/login",loginData);
  }
  password(userData){
    return this.http.post<any>("http://localhost:4200/v1/forgotpassword/passwordreset",userData)
  }
  resetpassword(passwordData,id){
    console.log(id);
    
    return this.http.post<any>("http://localhost:4200/v1/resetpassword/passwordreset",{passwordData:passwordData,id:id});
  
  }
}
