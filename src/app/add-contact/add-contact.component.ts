import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { HomeRequestService } from '../home-request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  user:User;
  flag:boolean;
  constructor(public homeRequest:HomeRequestService,public router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
  }

  addContact(contact){
    console.log(contact);
    this.homeRequest.addContact(this.user.userId,contact).subscribe(data=>{
      console.log("data"+data);
      if(data=="added"){
        this.flag=true;
        this.homeRequest.getUpdatedUser(this.user.userId).subscribe(data=>{
          console.log(data);
          sessionStorage.setItem("user",JSON.stringify(data));
        });
        
      }else{
        this.flag=false;
      }
    });
  }

}
