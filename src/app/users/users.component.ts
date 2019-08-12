import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 usersData:any;
 
constructor(private usersService: UsersService) {
  // console.log('1234   ')
 }

  ngOnInit() {
    // console.log('ijhuihi');
  this.getData()
  }

  getData(){
  console.log('hi');
  this.usersService.getData()
  .subscribe((res:any)=>{
   console.log(res);
   this.usersData = res.data;
    
  })

}
}
