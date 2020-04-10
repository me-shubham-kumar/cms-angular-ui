import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Contact } from '../Contact';
import { HomeRequestService } from '../home-request.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-show-all-contact',
  templateUrl: './show-all-contact.component.html',
  styleUrls: ['./show-all-contact.component.css']
})
export class ShowAllContactComponent implements OnInit {

  contacts:Array<Contact>;
  user:User;
  flag:boolean;
  constructor(public homeRequest:HomeRequestService,public router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
    this.homeRequest.getAllContact(this.user.userId).subscribe(data=>{
      this.contacts=data;
      sessionStorage.setItem("contacts",JSON.stringify(data));
    });
  }

  delete(contactId){
    console.log(contactId);
    this.homeRequest.delete(contactId).subscribe(data=>{
      if(data=="deleted"){
        this.flag=true;
        this.homeRequest.getUpdatedUser(this.user.userId).subscribe(userData=>{
          this.homeRequest.getAllContact(this.user.userId).subscribe(data=>{
            this.contacts=data;
            sessionStorage.setItem("contacts",JSON.stringify(data));
            sessionStorage.setItem("user",JSON.stringify(userData));
            this.router.navigate(["/home/showAllContact"]);

          });
          
        });
      }
    });
  }

}
