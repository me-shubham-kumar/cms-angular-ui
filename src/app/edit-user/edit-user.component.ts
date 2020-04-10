import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';
import { HomeRequestService } from '../home-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  flag:boolean;
  user:User;
  tempUser:User;
  constructor(public homeRequest:HomeRequestService,public router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
  }
  updatePassword(){
    let password = $("#password").val();
    console.log(this.user.userId);
    this.user.password=password;
    this.homeRequest.changePassword(this.user).subscribe(data=>{
      this.flag = true;
      this.user=data;
      sessionStorage.setItem("user",JSON.stringify(data));
      console.log(data);
    });

  }

}
