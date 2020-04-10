import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../User';
import { Contact } from '../Contact';
import { Router } from '@angular/router';
import { HomeRequestService } from '../home-request.service';
import * as $ from 'node_modules/jquery/dist/jquery.min.js';


@Component({
  selector: 'app-search-contact',
  templateUrl: './search-contact.component.html',
  styleUrls: ['./search-contact.component.css']
})
export class SearchContactComponent implements OnInit,OnDestroy {

  user:User;
  flag:boolean;
   searchContacts:Array<Contact>;
   contacts:Array<Contact>;
  constructor(public homeRequest:HomeRequestService,public router:Router) { }

  ngOnInit() {
    console.log("searchContact ngOnInit()");
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if(this.user==null || this.user==undefined){
      this.router.navigate(['/login']);
    }
    this.homeRequest.getAllContact(this.user.userId).subscribe(data=>{
      this.contacts=data;
      this.searchContacts=data;
      sessionStorage.setItem("contacts",JSON.stringify(data));
    });
  }


  setContact(){
    let searchInput = $("#search-input").val();
    if(searchInput!=""){
      this.homeRequest.searchContact(this.user.userId,searchInput).subscribe(data=>{
        this.searchContacts=data;
      });
    }else{
      this.searchContacts=this.contacts;
    }
  }

  delete(contactId){
    this.homeRequest.delete(contactId).subscribe(data=>{
      if(data=="deleted"){
        this.flag=true;
        this.homeRequest.getUpdatedUser(this.user.userId).subscribe(userData=>{
          this.homeRequest.getAllContact(this.user.userId).subscribe(data=>{
            this.contacts=data;
            this.searchContacts=data;
            sessionStorage.setItem("contacts",JSON.stringify(data));
            sessionStorage.setItem("user",JSON.stringify(userData));
            this.router.navigate(["/home/searchContact"]);

          });
          
        });
      }
    });
  }
  ngOnDestroy(){
    console.log("searchContact ngOnDestroy()");
  }

}
