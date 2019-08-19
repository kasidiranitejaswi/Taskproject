import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
// import { MovieService } from '../movie/service';
// import {MatPaginatorModule} from '@angular/material/paginator';
// import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

 usersData:any;
//  public first_name:any;
//  public last_name:any;
 public params = {
  per_page: 3,
  page: 1,
  total:12,
  total_pages: 4
  }
  public total: Number;

constructor(private usersService: UsersService) {
  // console.log('1234')
 }

//  list = {
//    find:''
//  }

  ngOnInit() {
    // console.log('ijhuihi');
  this.getData()
  }
  pageChange() {
    this.getData();
  }
  
  getData(){
  // console.log('hi');
  this.usersService.getData(this.params)
  .subscribe((res:any)=>{
   console.log(res);
   this.usersData = res.data;
   this.total = res.total;
    
  })

}


}

