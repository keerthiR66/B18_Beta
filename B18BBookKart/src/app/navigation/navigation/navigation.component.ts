import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DataserviceService} from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  user:any;
  userDetails: any;

  constructor(public DataserviceService:DataserviceService,private router:Router,) {
    this.DataserviceService.userDetails.subscribe((user: any) => {
      this.userDetails = user;
      this.user= localStorage.getItem('username');
    });
    setTimeout(()=>{
      this.user= localStorage.getItem('username');
    },500)
   }

  ngOnInit(): void {
    this.user= localStorage.getItem('username');
  }
  logout(){
    localStorage.clear();
  }
  myOrders(){
    this.router.navigate(['/myOrders'])
  }
}



