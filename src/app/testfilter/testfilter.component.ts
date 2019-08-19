import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilterPipe } from 'filter.pipe';

@Component({
  selector: 'app-testfilter',
  templateUrl: './testfilter.component.html',
  styleUrls: ['./testfilter.component.css']
})
export class TestfilterComponent implements OnInit {
public searchText : string;
  public customerData : any;

  constructor(private router : Router) {
 
   }

  ngOnInit() {
    this.customerData = [
      {"name": 'Teju Reddy' , "Age": 24 },
      {"name": 'Neena' , "Age": 21 },
      {"name": 'Subhash' , "Age": 24 },
      {"name": 'Nani' , "Age": 27 },
      {"name": 'Ashok Reddy' , "Age": 54 },
      {"name": 'Jyothi' , "Age": 57 }
    ];
  }
  next(){
    this.router.navigate(['/users'])
  }
}
