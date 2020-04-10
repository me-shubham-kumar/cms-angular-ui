import { Component, OnInit } from '@angular/core';
import { BaseService } from '../base.service';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User;
  constructor(public base:BaseService,public router:Router) { }


  ngOnInit() {
  }

  registerUser(userRef){
    console.log(userRef);
    this.base.registerUser(userRef).subscribe(data=>{
      sessionStorage.setItem("userId",JSON.stringify(data.userId));
      this.router.navigate(["/login"]);
    });
  }

}
