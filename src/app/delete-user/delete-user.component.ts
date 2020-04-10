import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeRequestService } from '../home-request.service';
import { User } from '../User';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  user:User;
  constructor(public homeRequest:HomeRequestService,public router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
  }
  deleteUser(select){
    if(select=="delete"){
    this.homeRequest.deleteUser(this.user.userId).subscribe(data=>{
      if(data=="deleted"){
        sessionStorage.removeItem("user");
        sessionStorage.removeItem("contacts");
        this.router.navigate(["/register"]);
      }
    });
  } else{
    this.router.navigate(["/home"]);
  }  
 }

}
