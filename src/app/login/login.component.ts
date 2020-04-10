import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;
  userId:number;
  success:boolean;
  fail:boolean;
  constructor(public base:BaseService,public router:Router) { }

  ngOnInit() {
    this.userId = eval(sessionStorage.getItem("userId"));
    if(this.userId!=null){
      this.success = true;
    }
    sessionStorage.removeItem("userId");
  }

  login(userRef){
    this.base.loginUser(userRef).subscribe(data=>{
      if(data != null){
        sessionStorage.setItem("user",JSON.stringify(data));
        sessionStorage.removeItem("userId");//removing session Item if any.
        this.router.navigate(["/home"]);
      }else{
        this.fail=true;
      }
    });
    }


}
