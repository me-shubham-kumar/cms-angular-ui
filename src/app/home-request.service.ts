import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class HomeRequestService {
  deleteUser(userId: number):Observable<any> {
    return this.httpClient.get("http://localhost:9090/deleteUser/"+userId,{responseType:'text'});
  }
  changePassword(user:User):Observable<any>{
    return this.httpClient.post("http://localhost:9090/updateUser",user,{responseType:'json'});
  }
  searchContact(userId:number,searchInput: any):Observable<any> {
    return this.httpClient.get("http://localhost:9090/user/"+userId+"/"+searchInput,{responseType:'json'});
  }
  delete(contactId:number):Observable<any>{
    return this.httpClient.get("http://localhost:9090/user/delete/"+contactId,{responseType:'text'});
  }
  getAllContact(userId: number):Observable<any>{
    return this.httpClient.get("http://localhost:9090/user/contacts/"+userId,{responseType:'json'});
  }

  constructor(public httpClient:HttpClient) { }

  addContact(userId: number, contact: any):Observable<any> {
    return this.httpClient.post("http://localhost:9090/user/addContact/"+userId,contact,{responseType:'text'});
  }

  getUpdatedUser(userId:number):Observable<any>{
    console.log(userId);
    return this.httpClient.get("http://localhost:9090/userProfile/"+userId,{responseType:'json'});
  }
}
