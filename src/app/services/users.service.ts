import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private http: HttpClient ) { }

  // sendingData(data){

  // }
getData(){
  return this.http.get(environment.apiURl + '/api/users')
.pipe(map(res => res));


}
}
