import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient, private router:Router ) { }

  // sendingData(data){

  // }
getData(data){
  // return this.http.get(environment.apiURl + '/api/users',{params:params})
  return this.http.post(environment.apiURl + '/users/register',data)
.pipe(map(res => res));
}
login(data) {
  return this.http.post(environment.apiURl + '/users/login',data)
} 
logoutUser(){
  localStorage.removeItem('token')
  this.router.navigate(['/authlogin'])
}
}
