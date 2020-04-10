import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { User } from '../User';
import { HomeRequestService } from '../home-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit,OnDestroy{

  user:User;
  constructor(public request:HomeRequestService,public router:Router) { 
    console.log("dashboard contructor");
  }

  ngOnInit() {
    console.log("dashboard ngOnInit()");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }

  }
  // ngOnChanges(){
  //   this.user = JSON.parse(sessionStorage.getItem("user"));
  // }
  ngOnDestroy(){
    console.log("dashboard ngOnDestroy()");
  }

}
