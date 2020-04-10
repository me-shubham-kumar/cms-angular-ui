import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user:User;
  constructor(public router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
  }
  showOptions(){
      $("#settingOptions").toggle();
  }
  logout(){
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("contacts");
    this.router.navigate(["/login"]);
  }
}
